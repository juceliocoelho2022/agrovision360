package com.agrovision.service;

import com.agrovision.model.Farm;
import com.agrovision.repository.FarmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FarmService {

    @Autowired
    private FarmRepository farmRepository;

    public List<Farm> getAllFarms() {
        return farmRepository.findAll();
    }

    public Optional<Farm> getFarmById(Long id) {
        return farmRepository.findById(id);
    }

    public Farm createFarm(Farm farm) {
        return farmRepository.save(farm);
    }

    public Farm updateFarm(Long id, Farm farmDetails) {
        return farmRepository.findById(id).map(farm -> {
            farm.setName(farmDetails.getName());
            farm.setLocation(farmDetails.getLocation());
            farm.setOwner(farmDetails.getOwner());
            return farmRepository.save(farm);
        }).orElse(null);
    }

    public void deleteFarm(Long id) {
        farmRepository.deleteById(id);
    }
}
