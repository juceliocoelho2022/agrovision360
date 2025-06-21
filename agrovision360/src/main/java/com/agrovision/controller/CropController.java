package com.agrovision.controller;


import com.agrovision.model.Crop;
import com.agrovision.repository.CropRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/crops")
public class CropController {

    @Autowired
    private CropRepository cropRepository;

    @GetMapping
    public List<Crop> getAllCrops() {
        return cropRepository.findAll();
    }

    @PostMapping
    public Crop createCrop(@RequestBody Crop crop) {
        return cropRepository.save(crop);
    }

    @GetMapping("/{id}")
    public Crop getCropById(@PathVariable Long id) {
        return cropRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Crop updateCrop(@PathVariable Long id, @RequestBody Crop cropDetails) {
        Crop crop = cropRepository.findById(id).orElse(null);
        if (crop != null) {
            crop.setName(cropDetails.getName());
            crop.setType(cropDetails.getType());
            crop.setPlantingDate(cropDetails.getPlantingDate());
            return cropRepository.save(crop);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteCrop(@PathVariable Long id) {
        cropRepository.deleteById(id);
    }
}
