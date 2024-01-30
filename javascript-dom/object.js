var siswa = new Object();
siswa.namaDepan = "Raid";
siswa.namaBelakang = "Sadad";
siswa.alamat ="Bandung";
siswa.namaLengkap = function() {
    return this.namaDepan + " " + this.namaBelakang;
};

// object JSON
var siswa2 ={
    namaDepan: "Rehan",
    namaBelakang: "Firdaus",
    alamat: "Bandung",
    namaLengkap: function () {
        return this.namaDepan + " " + this.namaBelakang;
    },
}

alert("Nama :" + siswa.namaLengkap());
alert("Nama :" + siswa2.namaLengkap());

//fungtion namaLengkap () {

//}