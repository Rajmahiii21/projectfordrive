package com.Akshat.demo.repository;

import com.Akshat.demo.model.Project;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepository extends MongoRepository<Project,String> {
}
