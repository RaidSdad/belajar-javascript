var grade = prompt("Masukan Nilaimu:");

if (grade <= 39) {
    alert("nilai = " + grade + " Maka grade E ");
} else if (grade >= 40 && grade <= 65) {
    alert("nilai = " + grade + " Maka grade D");
} else if (grade >= 65 && grade <= 75) {
    alert("nilai = " + grade + " Maka grade C");
} else if (grade >= 75 && grade <= 85) {
    alert("nilai = " + grade + " Maka grade B");
} else if (grade >= 85 && grade <= 100) {
    alert("nilai = " + grade + " Maka grade A");
} else {
    alert("Nilai anda tidak valid")
}