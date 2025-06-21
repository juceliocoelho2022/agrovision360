package com.agrovision.controller;

import com.agrovision.service.ForecastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/forecast")
public class ForecastController {

    @Autowired
    private ForecastService forecastService;

    @GetMapping("/{farmId}")
    public Map<String, Object> getForecast(@PathVariable Long farmId) {
        double estimated = forecastService.estimateNextYearYield(farmId);
        return Map.of(
                "farmId", farmId,
                "estimatedProduction", estimated,
                "unit", "toneladas"
        );
    }
}
