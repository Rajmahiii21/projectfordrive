package com.Akshat.demo.service;

import com.Akshat.demo.model.Newsletter;
import com.Akshat.demo.repository.NewsletterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsletterService {

    @Autowired
    private NewsletterRepository newsletterRepository;

    public Newsletter subscribe(Newsletter newsletter) {
        return newsletterRepository.save(newsletter);
    }

    public List<Newsletter> getAllSubscribers() {
        return newsletterRepository.findAll();
    }
}

