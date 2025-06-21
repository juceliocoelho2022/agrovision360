package com.agrovision.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class SaleRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cropSold;
    private Double quantity;
    private Double revenue;
    private LocalDate saleDate;

    @ManyToOne
    private Farm farm;

    // Getters e Setters
}
