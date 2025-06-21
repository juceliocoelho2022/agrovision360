package com.agrovision.repository;


import com.agrovision.model.Farm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FarmRepository extends JpaRepository<Farm, Long> {
    // Aqui você pode adicionar queries personalizadas se quiser
}

