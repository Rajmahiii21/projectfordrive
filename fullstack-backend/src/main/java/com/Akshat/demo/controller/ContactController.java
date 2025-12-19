package com.Akshat.demo.controller;

import com.Akshat.demo.model.Contact;
import com.Akshat.demo.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contact")
@CrossOrigin
public class ContactController {

    @Autowired
    private ContactService contactService;

    // USER SIDE
    @PostMapping
    public Contact submitContact(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }

    // ADMIN SIDE
    @GetMapping("/admin")
    public List<Contact> getAllContacts() {
        return contactService.getAllContacts();
    }
}

