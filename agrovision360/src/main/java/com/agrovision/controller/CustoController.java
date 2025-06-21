package com.agrovision.controller;

import com.agrovision.model.Custo;
import com.agrovision.repository.CustoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/custos")
@CrossOrigin(origins = "*")
public class CustoController {

    @Autowired
    private CustoRepository custoRepository;

    @GetMapping
    public List<Custo> listar(@RequestParam Long farmId) {
        return custoRepository.findByFarmId(farmId);
    }

    @PostMapping
    public Custo salvar(@RequestBody Custo custo) {
        return custoRepository.save(custo);
    }
}
