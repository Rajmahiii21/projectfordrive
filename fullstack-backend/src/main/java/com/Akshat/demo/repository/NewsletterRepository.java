package com.Akshat.demo.repository;

import com.Akshat.demo.model.Newsletter;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NewsletterRepository extends MongoRepository<Newsletter,String> {


}
