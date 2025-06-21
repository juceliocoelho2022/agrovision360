package com.agrovision.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Estoque {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int quantity;
    private String unit;
    private Long farmId;
}
