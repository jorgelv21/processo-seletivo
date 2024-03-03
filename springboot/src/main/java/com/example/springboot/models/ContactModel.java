package com.example.springboot.models;

import jakarta.persistence.*;
import org.springframework.hateoas.RepresentationModel;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.UUID;

@Entity
@Table(name = "tb_contacts")
public class ContactModel extends RepresentationModel<ContactModel> implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idContact;
    private String name;
    private String address;
    private BigInteger fone;
    private BigInteger cpf;
    private Integer cep;
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

    public BigInteger getFone() {
        return fone;
    }

    public void setFone(BigInteger fone) {
        this.fone = fone;
    }

    public BigInteger getCpf() {
        return cpf;
    }

    public void setCpf(BigInteger cpf) {
        this.cpf = cpf;
    }

    public Integer getCep() {
        return cep;
    }

    public void setCep(Integer cep) {
        this.cep = cep;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
