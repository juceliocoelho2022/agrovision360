package com.agrovision.repository;

import com.agrovision.model.Venda;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VendaRepository extends JpaRepository<Venda, Long> {
    List<Venda> findByFarmId(Long farmId);
}
