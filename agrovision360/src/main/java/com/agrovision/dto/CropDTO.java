package com.agrovision.dto;

import java.time.LocalDate;

public class CropDTO {
    private Long id;
    private String name;
    private String type;
    private LocalDate plantingDate;


    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getType() { return type; }

    public void setType(String type) { this.type = type; }

    public LocalDate getPlantingDate() { return plantingDate; }

    public void setPlantingDate(LocalDate plantingDate) { this.plantingDate = plantingDate; }
}
