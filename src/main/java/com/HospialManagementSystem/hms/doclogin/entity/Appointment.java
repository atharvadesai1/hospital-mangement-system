package com.HospialManagementSystem.hms.doclogin.entity;

import jakarta.persistence.*;


@Entity
@Table(name = "appointments")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private String age;

    @Column(name = "symptoms")
    private String symptoms;

    @Column(name = "phone")
    private String phone;

    public Appointment(long id, String name, String age, String symptoms, String phone){
        super();
        this.id = id;
        this.name = name;
        this.age = age;
        this.symptoms = symptoms;
        this.phone = phone;
    }

    public Appointment(){
        super();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age){
        this.age = age;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
