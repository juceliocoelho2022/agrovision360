package com.agrovision.repository;


import com.agrovision.model.Crop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CropRepository extends JpaRepository<Crop, Long> {
    // Exemplo: List<Crop> findByFarmId(Long farmId);
}
