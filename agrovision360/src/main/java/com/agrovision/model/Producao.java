package com.agrovision.model;

import jakarta.persistence.*;

@Entity
@Table(name = "producao")
public class Producao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int year;

    @Column(name = "area_planted")
    private double areaPlanted;

    @Column(name = "total_produced")
    private double totalProduced;

    @Column(name = "farm_id")
    private Long farmId;

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getAreaPlanted() {
        return areaPlanted;
    }

    public void setAreaPlanted(double areaPlanted) {
        this.areaPlanted = areaPlanted;
    }

    public double getTotalProduced() {
        return totalProduced;
    }

    public void setTotalProduced(double totalProduced) {
        this.totalProduced = totalProduced;
    }

    public Long getFarmId() {
        return farmId;
    }

    public void setFarmId(Long farmId) {
        this.farmId = farmId;
    }
}
