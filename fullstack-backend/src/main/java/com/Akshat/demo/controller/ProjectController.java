package com.Akshat.demo.controller;

import com.Akshat.demo.model.Project;
import com.Akshat.demo.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @PostMapping
    public Project addProject(@RequestBody Project project) {
//        System.out.println(
//                "PROJECT RECEIVED: name=" + project.getName() +
//                        ", desc=" + project.getDescription() +
//                        ", img=" + project.getImageUrl()
//        );
        return projectRepository.save(project);
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProject(@PathVariable String id) {

        if (!projectRepository.existsById(id)) {
            return ResponseEntity
                    .status(404)
                    .body("Project not found with id: " + id);
        }

        projectRepository.deleteById(id);
        return ResponseEntity.ok("Project deleted successfully");
    }
}
