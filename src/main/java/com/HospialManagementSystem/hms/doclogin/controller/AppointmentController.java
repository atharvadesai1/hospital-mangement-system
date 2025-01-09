package com.HospialManagementSystem.hms.doclogin.controller;

import com.HospialManagementSystem.hms.doclogin.entity.Appointment;
import com.HospialManagementSystem.hms.doclogin.repository.AppointmentRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.Attribute;
import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v2")
public class AppointmentController {
    AppointmentRepository appointmentRepository;
    public AppointmentController(AppointmentRepository appointmentRepository){
        super();
        this.appointmentRepository = appointmentRepository;
    }

    @PostMapping("/insert")
    public Appointment createAppointment(@RequestBody Appointment appointment){
        return appointmentRepository.save(appointment);
    }

    @GetMapping("/appointments")
    public List<Appointment> getAllAppointment(){
        return appointmentRepository.findAll();
    }

    @DeleteMapping("/appointments/{id}")
    public ResponseEntity<Map<String, Boolean>>deleteAppointment(@PathVariable long id) throws AttributeNotFoundException {
        Appointment appointment = appointmentRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Appointment not found with id "+id));
        appointmentRepository.delete(appointment);
        Map<String, Boolean> response = new HashMap<String, Boolean>();
        response.put("Delete", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
