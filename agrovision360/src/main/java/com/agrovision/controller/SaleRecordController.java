package com.agrovision.controller;


import com.agrovision.model.SaleRecord;
import com.agrovision.repository.SaleRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sales")
public class SaleRecordController {

    @Autowired
    private SaleRecordRepository saleRecordRepository;

    @GetMapping("/farm/{farmId}")
    public List<SaleRecord> getSalesByFarm(@PathVariable Long farmId) {
        return saleRecordRepository.findByFarmId(farmId);
    }

    @PostMapping
    public SaleRecord addSale(@RequestBody SaleRecord sale) {
        return saleRecordRepository.save(sale);
    }
}
