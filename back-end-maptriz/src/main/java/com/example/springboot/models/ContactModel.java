package com.example.springboot.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.br.CPF;
import org.springframework.hateoas.RepresentationModel;

import java.io.Serial;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "TB_CONTACTS")
public class ContactModel extends RepresentationModel<ContactModel> implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idContact;


    @NotEmpty
    private String name;


    @NotEmpty
    private String address;

    @NotEmpty
    private String city;

    @NotEmpty
    private String state;

    @NotEmpty
    private String country;


    @NotNull
    private String fone;


    @NotNull
    @CPF
    private String cpf;


    @NotNull
    @Size(min = 8, max = 9)
    private String cep;

    @NotEmpty
    @Email(message = "Email invalido")
    private String email;

    public UUID getIdContact() {
        return idContact;
    }

    public void setIdContact(UUID idContact) {
        this.idContact = idContact;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getFone() {
        return fone;
    }

    public void setFone(String fone) {
        this.fone = fone;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}




