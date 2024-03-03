package com.example.springboot.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.springboot.models.ContactModel;

import java.util.UUID;

@Repository
public interface ContactRepository extends JpaRepository<ContactModel, UUID> {

}
