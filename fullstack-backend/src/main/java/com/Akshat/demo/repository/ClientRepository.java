package com.Akshat.demo.repository;

import com.Akshat.demo.model.Client;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClientRepository extends MongoRepository<Client,String> {
}
