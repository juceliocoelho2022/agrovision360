package com.agrovision.repository;

import com.agrovision.model.Custo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustoRepository extends JpaRepository<Custo, Long> {
    List<Custo> findByFarmId(Long farmId);
}
