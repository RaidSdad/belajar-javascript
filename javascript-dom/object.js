var siswa = new Object();
siswa.namaDepan = "Raid";
siswa.namaBelakang = "Sadad";
siswa.alamat ="Bandung";
siswa.namaLengkap = function() {
    return this.namaDepan + " " + this.namaBelakang;
}

alert("Nama :" + siswa.namaLengkap());

//fungtion namaLengkap () {

//}