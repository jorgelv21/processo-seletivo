package com.example.springboot.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigInteger;

public record ContactRecordDto(@NotBlank String name, @NotBlank String address, @NotNull BigInteger fone, @NotNull BigInteger cpf, @NotNull Integer cep, @NotBlank String email) {

}
