package ua.net.usv.backend.config;

public class SecurityConstants {
    public static final String SECRET = "9124dc4c-c1d1-452c-9fa0-f25a16288bf3"; // SecretKeyToGenJWTs
    public static final long EXPIRATION_TIME = 864_000_000; // 10 days
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String SIGN_UP_URL = "/api/users/sign-up";
}
