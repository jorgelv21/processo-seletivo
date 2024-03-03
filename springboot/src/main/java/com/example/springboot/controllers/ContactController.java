package com.example.springboot.controllers;

import com.example.springboot.dtos.ContactRecordDto;
import com.example.springboot.models.ContactModel;
import com.example.springboot.repositories.ContactRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
public class ContactController {

    @Autowired
     ContactRepository contactRepository;

     @GetMapping("/contacts")
     public ResponseEntity<List<ContactModel>> getAllContacts(){
         List<ContactModel> contactsList = contactRepository.findAll();
         if(!contactsList.isEmpty()){
             for(ContactModel contact : contactsList){
                 UUID id = contact.getIdContact();
                 contact.add(linkTo(methodOn(ContactController.class).getAllContacts()).withSelfRel());
             }
         }
         return ResponseEntity.status(HttpStatus.OK).body(contactsList);
     }

     @GetMapping("/contacts/{id}")
     public ResponseEntity<Object> getOneContact(@PathVariable(value = "id") UUID id){
         Optional<ContactModel> contact0 = contactRepository.findById(id);
         if(contact0.isEmpty()){
             return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa não encontrada");
         }
         contact0.get().add(linkTo(methodOn(ContactController.class).getAllContacts()).withRel("Contacts List"));
         return ResponseEntity.status(HttpStatus.OK).body(contact0.get());
         }

    @PostMapping("/contacts")
    public ResponseEntity<ContactModel> saveContact(@RequestBody ContactRecordDto contactRecordDto){
        var contactModel = new ContactModel();
        BeanUtils.copyProperties(contactRecordDto, contactModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(contactRepository.save(contactModel));
    }

    @DeleteMapping("/contacts/{id}")
    public ResponseEntity<Object> deleteContact(@PathVariable(value = "id") UUID id){
        Optional<ContactModel> contact0 = contactRepository.findById(id);
        if(contact0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa não encontrada");
        }
        contactRepository.delete(contact0.get());
        return ResponseEntity.status(HttpStatus.OK).body(contact0.get());
    }

    @PutMapping("/contacts/{id}")
    public ResponseEntity<Object> updateContact(@PathVariable(value = "id") UUID id,
                                                @RequestBody  @Valid ContactRecordDto contactRecordDto){
        Optional<ContactModel> contact0 = contactRepository.findById(id);
        if(contact0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa não encontrada");
        }
        var contactModel = contact0.get();
        BeanUtils.copyProperties(contactRecordDto, contactModel);
        return ResponseEntity.status(HttpStatus.OK).body(contactRepository.save(contactModel));
    }

}
