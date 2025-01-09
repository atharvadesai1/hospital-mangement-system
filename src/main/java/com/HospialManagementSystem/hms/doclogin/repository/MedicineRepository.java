package com.HospialManagementSystem.hms.doclogin.repository;

import com.HospialManagementSystem.hms.doclogin.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {
}
