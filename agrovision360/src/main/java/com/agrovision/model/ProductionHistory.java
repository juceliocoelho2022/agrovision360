package com.agrovision.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class ProductionHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer year;
    private Double areaPlanted;
    private Double totalProduced;

    @ManyToOne
    private Farm farm;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Double getAreaPlanted() {
        return areaPlanted;
    }

    public void setAreaPlanted(Double areaPlanted) {
        this.areaPlanted = areaPlanted;
    }

    public Double getTotalProduced() {
        return totalProduced;
    }

    public void setTotalProduced(Double totalProduced) {
        this.totalProduced = totalProduced;
    }

    public Farm getFarm() {
        return farm;
    }

    public void setFarm(Farm farm) {
        this.farm = farm;
    }

    // Getters e Setters
}