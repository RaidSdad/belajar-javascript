var menu = prompt("Pilih Menu Makanan \n 1. Nasi Goreng  \n 2. Mie Ayam  \n 3. Bubur Ayam") 
var jumlah = prompt(" Masukan Jumlah Yang Akan Di Beli")

if (menu == "Nasi Goreng") {
    alert(" Makanan Yang Dipilih = Nasi Goreng\nJumlah = " + jumlah + "\nTotal Biaya =" + jumlah*10000);
    alert("TERIMAKASIH!!!❤")
} else if (menu == "Mie Ayam") {
    alert(" Makanan Yang Dipilih = Mie Ayam\nJumlah = " + jumlah + "\nTotal Biaya =" + jumlah*8000)
    alert("TERIMAKASIH!!!❤")
} else if (menu == "Bubur Ayam") {
    alert(" Makanan Yang Dipilih = Bubur Ayam\nJumlah = " + jumlah + "\nTotal Biaya =" + jumlah*10000)
    alert("TERIMAKASIH!!!❤")
}