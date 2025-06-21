package com.agrovision.controller;

import com.agrovision.model.CostRecord;
import com.agrovision.repository.CostRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/costs")
public class CostRecordController {

    @Autowired
    private CostRecordRepository costRecordRepository;

    @GetMapping("/farm/{farmId}")
    public List<CostRecord> getCostsByFarm(@PathVariable Long farmId) {
        return costRecordRepository.findByFarmId(farmId);
    }

    @PostMapping
    public CostRecord addCost(@RequestBody CostRecord cost) {
        return costRecordRepository.save(cost);
    }
}
