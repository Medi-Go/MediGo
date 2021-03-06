package com.capstone.medigo.global.security.config;

import static com.capstone.medigo.domain.member.model.Role.ROLE_USER;
import static org.springframework.http.HttpMethod.GET;

import com.capstone.medigo.global.security.filter.JwtAuthenticationFilter;
import com.capstone.medigo.global.security.handler.OAuth2SuccessHandler;
import com.capstone.medigo.global.token.TokenService;
import com.capstone.medigo.domain.member.service.CustomOAuth2UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final CustomOAuth2UserService oAuth2UserService;
    private final OAuth2SuccessHandler successHandler;
    private final TokenService tokenService;

    @Bean
    protected SecurityFilterChain configure(HttpSecurity http) throws Exception {
        http.httpBasic(httpBasic -> httpBasic.disable());
        http.cors(cors -> cors.disable());
        http.csrf(csrf -> csrf.disable());
        http.sessionManagement(sessionManagement ->
            sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        );

//        http.httpBasic().disable(); // rest api -> http 로그인 페이지 폼 X
//        http.cors();
//        http.csrf().disable(); // rest api -> csrf 보안 X
//        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // 순서 1
        // 로그인은 누구나 접근 가능하게 + 토큰 갱신
//        http.authorizeRequests().antMatchers("/token/**", "/login/**").permitAll();
        http.authorizeRequests(authorizeRequests ->
            authorizeRequests.antMatchers("/token/**", "/login/**", "/test/**").permitAll()
        );

        // 순서 2
//        http.authorizeRequests().antMatchers(GET, "/api/user/**")
//            .hasAnyAuthority(ROLE_USER.stringValue);
        http.authorizeRequests(authorizeRequests ->
            authorizeRequests
                .antMatchers(GET, "/api/user/**")
                .hasAnyAuthority(ROLE_USER.stringValue)
        );

        // 순서 3
//        http.authorizeRequests().anyRequest().authenticated(); // 인증 필요
        http.authorizeRequests(authorizeRequests ->
            authorizeRequests.anyRequest().authenticated());

//        http.formLogin().loginPage("/login")
//            .failureUrl("/login");
        http.formLogin(formLogin ->
            formLogin.loginPage("/login")
                .failureUrl("/login")
        );

//        http.logout().logoutSuccessUrl("/login");
        http.logout(logout -> logout.logoutSuccessUrl("/login"));

//        http.oauth2Login().successHandler(successHandler).userInfoEndpoint()
//            .userService(oAuth2UserService);
        http.oauth2Login(oauth2Login ->
            oauth2Login.successHandler(successHandler)
                .userInfoEndpoint()
                .userService(oAuth2UserService)
        );

        http.addFilterBefore(new JwtAuthenticationFilter(tokenService),
            UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
