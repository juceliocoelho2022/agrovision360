package com.agrovision.controller;

import com.agrovision.model.Venda;
import com.agrovision.repository.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vendas")
@CrossOrigin(origins = "*")
public class VendaController {

    @Autowired
    private VendaRepository vendaRepository;

    @GetMapping
    public List<Venda> listar(@RequestParam Long farmId) {
        return vendaRepository.findByFarmId(farmId);
    }

    @PostMapping
    public Venda salvar(@RequestBody Venda venda) {
        return vendaRepository.save(venda);
    }
}
