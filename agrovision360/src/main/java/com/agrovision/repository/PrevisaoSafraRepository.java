package com.agrovision.repository;

import com.agrovision.model.PrevisaoSafra;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PrevisaoSafraRepository extends JpaRepository<PrevisaoSafra, Long> {
    List<PrevisaoSafra> findByFarmId(Long farmId);
}