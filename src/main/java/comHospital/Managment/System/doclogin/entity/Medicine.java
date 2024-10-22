package comHospital.Managment.System.doclogin.entity;

import javax.persistence.*; // Use javax.persistence instead of jakarta.persistence

@Entity
@Table(name = "medicines")
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "drug")
    private String drug;

    @Column(name = "stock")
    private String stock;

    public Medicine(long id, String drug, String stock) {
        super();
        this.id = id;
        this.drug = drug;
        this.stock = stock;
    }

    public Medicine() {
        super();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDrug() {
        return drug;
    }

    public void setDrug(String drug) {
        this.drug = drug;
    }

    public String getStock() {
        return stock;
    }

    public void setStock(String stock) {
        this.stock = stock;
    }
}
