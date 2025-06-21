package com.agrovision.repository;

import com.agrovision.model.Estoque;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EstoqueRepository extends JpaRepository<Estoque, Long> {
    List<Estoque> findByFarmId(Long farmId);
}
