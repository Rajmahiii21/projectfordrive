package com.Akshat.demo.service;

import com.Akshat.demo.model.Client;
import com.Akshat.demo.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.yaml.snakeyaml.comments.CommentLine;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public Client saveClient(Client client){
        return clientRepository.save(client);
    }
    public List<Client> getAllClients(){
        return clientRepository.findAll();
    }
}
