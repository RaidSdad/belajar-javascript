var user = prompt('Select One \n1.Gajah \n2.Orang \n3.Semut')
var computer = Math.random();

if (computer < 0.34) {
    computer = "Gajah";
} else if (computer <= 0.67) {
    computer = "Orang";
} else {
    computer = "Semut";
}

if (user == 1 && computer == "Gajah") { // User 1
    alert('Kamu Memilih Gajah Seri Komputer Memilih ' + computer)
} else if (user == 1 && computer == "Semut") {
    alert('Kamu Memilih Gajah Kompoter Menang Memilih ' + computer)
} else if (user == 1 && computer == "Orang") {
    alert('Kamu Memilih Gajah Kompoter Kalah Komputer Memilih ' + computer)
} else if (user == 2 && computer == "Gajah") { // User 2
    alert('Kamu Memilih Orang Kalah Komputer Memilih ' + computer)
} else if (user == 2 && computer == "Semut") {
    alert('Kamu Memilih orang Menang Komputer Memilih ' + computer)
} else if (user == 2 && computer == "Orang") {
    alert('Kamu Memilih Orang Seri Komputer Memilih ' + computer)
} else if (user == 3 && computer == "Gajah") { // User 3
    alert('Kamu Memilih Semut Menang Komputer Memilih' + computer)
} else if (user == 2 && computer == "Semut") {
    alert('Kamu Memilih Orang Menang Komputer Memilih ' + computer)
} else if (user == 2 && computer == "Orang") {
    alert('Kamu Memilih Orang Seri Komputer Memilih ' + computer)
} else {
    alert('Masukan Input yang Benar')
}