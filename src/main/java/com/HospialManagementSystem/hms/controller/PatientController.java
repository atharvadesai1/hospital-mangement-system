package com.HospialManagementSystem.hms.controller;

import com.HospialManagementSystem.hms.entity.Patient;
import com.HospialManagementSystem.hms.repository.PatientRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")

public class PatientController {
    private final PatientRepository patientRepository;
    public PatientController(PatientRepository patientRepository){
        super();
        this.patientRepository = patientRepository;
    }

    @PostMapping("/insert")
    public Patient createPatient(@RequestBody Patient patient){
        return patientRepository.save(patient);
    }

    @GetMapping("/patients")
    public List<Patient> getAllPatient(){
        return patientRepository.findAll();
    }

    @DeleteMapping("/patients/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable long id) throws AttributeNotFoundException {
        Patient patient = patientRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Patient Data with id "+id+" not found"));
        patientRepository.delete(patient);
        Map<String, Boolean> response = new HashMap<String, Boolean>();
        response.put("Delete", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
