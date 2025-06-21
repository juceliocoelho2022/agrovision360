package com.agrovision.controller;


import com.agrovision.model.Producao;
import com.agrovision.repository.ProducaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/production-history")
@CrossOrigin(origins = "*") // permite chamadas do frontend
public class ProducaoController {

    @Autowired
    private ProducaoRepository producaoRepository;

    // Buscar produções por farmId
    @GetMapping
    public List<Producao> listar(@RequestParam Long farmId) {
        return producaoRepository.findByFarmId(farmId);
    }

    // Salvar nova produção
    @PostMapping
    public Producao salvar(@RequestBody Producao producao) {
        return producaoRepository.save(producao);
    }
}
