package com.agrovision.dto;

import java.util.List;

public class FarmDTO {
    private Long id;
    private String name;
    private String location;
    private String owner;
    private List<CropDTO> crops;


    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getLocation() { return location; }

    public void setLocation(String location) { this.location = location; }

    public String getOwner() { return owner; }

    public void setOwner(String owner) { this.owner = owner; }

    public List<CropDTO> getCrops() { return crops; }

    public void setCrops(List<CropDTO> crops) { this.crops = crops; }
}

