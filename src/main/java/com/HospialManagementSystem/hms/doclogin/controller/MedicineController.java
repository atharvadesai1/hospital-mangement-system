package com.HospialManagementSystem.hms.doclogin.controller;

import com.HospialManagementSystem.hms.doclogin.entity.Medicine;
import com.HospialManagementSystem.hms.doclogin.repository.MedicineRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v3")
public class MedicineController {
    MedicineRepository medicineRepository;
    public MedicineController(MedicineRepository medicineRepository){
        super();
        this.medicineRepository = medicineRepository;
    }

    @PostMapping("/insert")
    public Medicine createMedicine(@RequestBody Medicine medicine){
        return medicineRepository.save(medicine);
    }

    @GetMapping("/medicine")
    public List<Medicine> getAllMedicine(){
        return medicineRepository.findAll();
    }

    @DeleteMapping("/medicine/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAppointment(@PathVariable long id) throws AttributeNotFoundException {
        Medicine medicine = medicineRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Medicine not found with id "+id));
        medicineRepository.delete(medicine);
        Map<String, Boolean> response = new HashMap<String, Boolean>();
        response.put("Delete", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
