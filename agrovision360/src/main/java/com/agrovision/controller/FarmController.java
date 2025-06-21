package com.agrovision.controller;


import com.agrovision.model.Farm;
import com.agrovision.repository.FarmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/farms")
public class FarmController {

    @Autowired
    private FarmRepository farmRepository;

    @GetMapping
    public List<Farm> getAllFarms() {
        return farmRepository.findAll();
    }

    @PostMapping
    public Farm createFarm(@RequestBody Farm farm) {
        return farmRepository.save(farm);
    }

    @GetMapping("/{id}")
    public Farm getFarmById(@PathVariable Long id) {
        return farmRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Farm updateFarm(@PathVariable Long id, @RequestBody Farm farmDetails) {
        Farm farm = farmRepository.findById(id).orElse(null);
        if (farm != null) {
            farm.setName(farmDetails.getName());
            farm.setLocation(farmDetails.getLocation());
            farm.setOwner(farmDetails.getOwner());
            return farmRepository.save(farm);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteFarm(@PathVariable Long id) {
        farmRepository.deleteById(id);
    }
}
