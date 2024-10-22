package comHospital.Managment.System.doclogin.repository;

import comHospital.Managment.System.doclogin.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}


