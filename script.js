let mevcutInput = "";

function sayiEkle(sayi) {
    mevcutInput += sayi;
    document.getElementById("sonuc").value = mevcutInput;
}

function islemEkle(islem) {
    mevcutInput += " " + islem + " ";
    document.getElementById("sonuc").value = mevcutInput;
}

function ekranTemizle() {
    mevcutInput = "";
    document.getElementById("sonuc").value = mevcutInput;
}

function sonucuHesapla() {
    try {
        mevcutInput = eval(mevcutInput).toString();
        document.getElementById("sonuc").value = mevcutInput;
    } catch (hata) {
        document.getElementById("sonuc").value = "Hata";
    }
}
