package com.agrovision.repository;


import com.agrovision.model.SaleRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SaleRecordRepository extends JpaRepository<SaleRecord, Long> {
    List<SaleRecord> findByFarmId(Long farmId);
}
