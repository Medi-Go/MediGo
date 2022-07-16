package com.capstone.medigo.domain.mydata.repository;

import com.capstone.medigo.domain.mydata.model.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {
}
