package com.agrovision.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Data
@Entity
public class Venda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String produto;
    private double quantidade;
    private double precoUnitario;
    private LocalDate data;
    private Long farmId;

    public double getTotal() {
        return quantidade * precoUnitario;
    }
}
