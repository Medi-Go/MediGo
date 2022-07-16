package com.capstone.medigo.global.security.config;

import static com.capstone.medigo.domain.Role.ROLE_USER;
import static org.springframework.http.HttpMethod.GET;

import com.capstone.medigo.global.security.filter.JwtAuthenticationFilter;
import com.capstone.medigo.global.security.handler.OAuth2SuccessHandler;
import com.capstone.medigo.global.token.TokenService;
import com.capstone.medigo.service.CustomOAuth2UserService;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final CustomOAuth2UserService oAuth2UserService;
    private final OAuth2SuccessHandler successHandler;
    private final TokenService tokenService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic().disable(); // rest api -> http 로그인 페이지 폼 X
        http.cors();
        http.csrf().disable(); // rest api -> csrf 보안 X
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // 순서 1
        // 로그인은 누구나 접근 가능하게 + 토큰 갱신
        http.authorizeRequests().antMatchers("/token/**", "/login/**").permitAll();

        // 순서 2
        http.authorizeRequests().antMatchers(GET, "/api/user/**")
            .hasAnyAuthority(ROLE_USER.stringValue);

        // 순서 3
        http.authorizeRequests().anyRequest().authenticated(); // 인증 필요

        http.formLogin().loginPage("/login")
            .failureUrl("/login");

        http.logout().logoutSuccessUrl("/login");

        http.oauth2Login().successHandler(successHandler).userInfoEndpoint()
            .userService(oAuth2UserService);
        http.addFilterBefore(new JwtAuthenticationFilter(tokenService),
            UsernamePasswordAuthenticationFilter.class);
    }
}
