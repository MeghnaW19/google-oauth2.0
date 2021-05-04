package com.stackroute.Oauth2.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping( "api/v1" )
public class Controller {

    @GetMapping("/username")
    public Map<String, String> getUserName( @AuthenticationPrincipal( expression = "attributes['name']" ) String username ) {
        return Collections.singletonMap("name", username);
    }
}
