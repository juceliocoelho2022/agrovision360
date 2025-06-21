package com.agrovision.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class PrevisaoSafra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int year;
    private double estimatedProduction;
    private double areaPlanted;
    private Long farmId;
}

