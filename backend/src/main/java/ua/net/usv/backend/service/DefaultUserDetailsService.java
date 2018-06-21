package ua.net.usv.backend.service;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ua.net.usv.backend.domain.User;
import ua.net.usv.backend.repository.UserRepository;

import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.stream.Collectors;

import static java.util.Collections.emptyList;

@Service
public class DefaultUserDetailsService implements UserDetailsService {
    private UserRepository userRepository;

    public DefaultUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(final String login) throws UsernameNotFoundException {

//        User user = userRepository.findByLogin(login).get();
//        if (user == null) {
//            throw new UsernameNotFoundException(login);
//        }
//        return new org.springframework.security.core.userdetails.User(user.getLogin(), user.getPassword(), emptyList());

        String lowercaseLogin = login.toLowerCase(Locale.ENGLISH);
        Optional<User> userByEmailFromDatabase = userRepository.findOneWithAuthoritiesByEmail(lowercaseLogin);
        return userByEmailFromDatabase.map(user -> createSpringSecurityUser(lowercaseLogin, user)).orElseGet(() -> {
            Optional<User> userByLoginFromDatabase = userRepository.findOneWithAuthoritiesByLogin(lowercaseLogin);
            return userByLoginFromDatabase.map(user -> createSpringSecurityUser(lowercaseLogin, user))
                    .orElseThrow(() -> new UsernameNotFoundException("User " + lowercaseLogin + " was not found in the " +
                            "database"));
        });
    }

    private org.springframework.security.core.userdetails.User createSpringSecurityUser(String lowercaseLogin, User user) {
        if (!user.isActivated()) {
            throw new UserNotActivatedException("User " + lowercaseLogin + " was not activated");
        }
        List<GrantedAuthority> grantedAuthorities = user.getAuthorities().stream()
                .map(authority -> new SimpleGrantedAuthority(authority.getName()))
                .collect(Collectors.toList());
        return new org.springframework.security.core.userdetails.User(user.getLogin(),
                user.getPassword(),
                grantedAuthorities);
    }

}
