package com.agrovision.controller;

import com.agrovision.model.Estoque;
import com.agrovision.repository.EstoqueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/estoque")
@CrossOrigin(origins = "*")
public class EstoqueController {

    @Autowired
    private EstoqueRepository estoqueRepository;

    @GetMapping
    public List<Estoque> listar(@RequestParam Long farmId) {
        return estoqueRepository.findByFarmId(farmId);
    }

    @PostMapping
    public Estoque salvar(@RequestBody Estoque item) {
        return estoqueRepository.save(item);
    }
}
