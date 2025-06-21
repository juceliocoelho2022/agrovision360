package com.agrovision.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class InventoryItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String item;
    private Double quantity;
    private LocalDate lastUpdated;

    @ManyToOne
    private Farm farm;

    // Getters e Setters
}