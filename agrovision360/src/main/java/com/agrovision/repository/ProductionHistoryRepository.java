package com.agrovision.repository;

import com.agrovision.model.ProductionHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductionHistoryRepository extends JpaRepository<ProductionHistory, Long> {
    List<ProductionHistory> findByFarmId(Long farmId);
}

