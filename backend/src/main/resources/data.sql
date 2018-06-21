insert into kdg_authority (name) values ('ROLE_ADMIN');
insert into kdg_authority (name) values ('ROLE_USER');

insert into kdg_user (id,login,password_hash,first_name,last_name,email,phone_number,image_url,activated,lang_key)
values (1, 'system', '$2a$10$mE.qmcV0mFU5NcKh73TZx.z4ueI/.bDWbj0T1BYyqP481kGGarKLG','System','System',
        'system@localhost','','',true,'ua');
insert into kdg_user (id,login,password_hash,first_name,last_name,email,phone_number,image_url,activated,lang_key)
values (2, 'anonymoususer', '$2a$10$j8S5d7Sr7.8VTOYNviDPOeWX8KcYILUVJBsYV83Y5NtECayypx9lO','Anonymous','User',
        'anonymous@localhost','','',true,'ua');
insert into kdg_user (id,login,password_hash,first_name,last_name,email,phone_number,image_url,activated,lang_key)
values (3, 'admin', '$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC','Administrator','Administrator',
        'admin@localhost','','',true,'ua');
insert into kdg_user (id,login,password_hash,first_name,last_name,email,phone_number,image_url,activated,lang_key)
values (4, 'user', '$2a$10$VEjxo0jq2YG9Rbk2HmX9S.k1uZBGYUHdUcid3g/vfiEl7lwWgOH/K','User','User',
        'user@localhost','','',true,'ua');

insert into kdg_user_authority (user_id, authority_name) values (1, 'ROLE_ADMIN');
insert into kdg_user_authority (user_id, authority_name) values (1, 'ROLE_USER');
insert into kdg_user_authority (user_id, authority_name) values (3, 'ROLE_ADMIN');
insert into kdg_user_authority (user_id, authority_name) values (3, 'ROLE_USER');
insert into kdg_user_authority (user_id, authority_name) values (4, 'ROLE_USER');
