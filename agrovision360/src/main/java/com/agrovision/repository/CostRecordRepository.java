package com.agrovision.repository;



import com.agrovision.model.CostRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CostRecordRepository extends JpaRepository<CostRecord, Long> {
    List<CostRecord> findByFarmId(Long farmId);
}
