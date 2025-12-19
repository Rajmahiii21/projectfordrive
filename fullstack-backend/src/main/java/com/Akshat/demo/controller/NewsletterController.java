package com.Akshat.demo.controller;

import com.Akshat.demo.model.Newsletter;
import com.Akshat.demo.service.NewsletterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/newsletter")
@CrossOrigin
public class NewsletterController {

    @Autowired
    private NewsletterService newsletterService;

    // USER SIDE
    @PostMapping
    public Newsletter subscribe(@RequestBody Newsletter newsletter) {
        return newsletterService.subscribe(newsletter);
    }

    // ADMIN SIDE
    @GetMapping("/admin")
    public List<Newsletter> getAllSubscribers() {
        return newsletterService.getAllSubscribers();
    }
}

