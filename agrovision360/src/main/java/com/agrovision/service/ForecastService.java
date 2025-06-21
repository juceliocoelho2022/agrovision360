package com.agrovision.service;

import com.agrovision.model.ProductionHistory;
import com.agrovision.repository.ProductionHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ForecastService {

    @Autowired
    private ProductionHistoryRepository productionHistoryRepository;

    public double estimateNextYearYield(Long farmId) {
        List<ProductionHistory> history = productionHistoryRepository.findByFarmId(farmId);
        return history.stream()
                .mapToDouble(ProductionHistory::getTotalProduced)
                .average()
                .orElse(0.0);
    }
}