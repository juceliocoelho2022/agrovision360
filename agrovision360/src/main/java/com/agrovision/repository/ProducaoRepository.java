package com.agrovision.repository;

import com.agrovision.model.Producao;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProducaoRepository extends JpaRepository<Producao, Long> {
    List<Producao> findByFarmId(Long farmId);
}
