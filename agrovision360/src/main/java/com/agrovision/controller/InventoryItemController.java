package com.agrovision.controller;


import com.agrovision.model.InventoryItem;
import com.agrovision.repository.InventoryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
public class InventoryItemController {

    @Autowired
    private InventoryItemRepository inventoryItemRepository;

    @GetMapping("/farm/{farmId}")
    public List<InventoryItem> getInventoryByFarm(@PathVariable Long farmId) {
        return inventoryItemRepository.findByFarmId(farmId);
    }

    @PostMapping
    public InventoryItem addInventory(@RequestBody InventoryItem item) {
        return inventoryItemRepository.save(item);
    }
}
