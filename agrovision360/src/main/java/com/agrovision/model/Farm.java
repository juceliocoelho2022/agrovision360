package com.agrovision.model;


import jakarta.persistence.*;
import java.util.List;

@Entity
public class Farm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String location;
    private String owner;

    @OneToMany(mappedBy = "farm", cascade = CascadeType.ALL)
    private List<Crop> crops;

    // Getters e Setters

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getLocation() { return location; }

    public void setLocation(String location) { this.location = location; }

    public String getOwner() { return owner; }

    public void setOwner(String owner) { this.owner = owner; }

    public List<Crop> getCrops() { return crops; }

    public void setCrops(List<Crop> crops) { this.crops = crops; }
}
