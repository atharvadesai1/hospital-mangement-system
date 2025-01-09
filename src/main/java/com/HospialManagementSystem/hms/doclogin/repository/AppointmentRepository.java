package com.HospialManagementSystem.hms.doclogin.repository;

import com.HospialManagementSystem.hms.doclogin.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
