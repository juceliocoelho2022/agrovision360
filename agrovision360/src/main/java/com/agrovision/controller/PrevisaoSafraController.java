package com.agrovision.controller;

import com.agrovision.model.PrevisaoSafra;
import com.agrovision.repository.PrevisaoSafraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/previsao")
@CrossOrigin(origins = "*")
public class PrevisaoSafraController {

    @Autowired
    private PrevisaoSafraRepository repository;

    @GetMapping
    public List<PrevisaoSafra> listar(@RequestParam Long farmId) {
        return repository.findByFarmId(farmId);
    }

    @PostMapping
    public PrevisaoSafra salvar(@RequestBody PrevisaoSafra previsao) {
        return repository.save(previsao);
    }
}
