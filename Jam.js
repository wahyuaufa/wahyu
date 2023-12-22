             var times = new Date();
             var jam = times.getHours();
             var mnt = times.getMinutes();
             var dtk = times.getSeconds();
             var hr = times.getDay();
             var bln = times.getMonth();
             var thn = times.getFullYear();

             var bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
             var hari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];

if( jam <= 4){
    window.alert("Hallo Selamat pagi "+nama+" Jangan lupakan jaket karena sekarang masih dingin.")
}
else if( jam <=10 ){
    dwindow.alert("Hallo Selamat pagi "+nama+" Selamat menjalani hari ini.");
}
else if(jam <=14){
    window.alert("Hallo Selamat siang "+nama+" Tetap semangat ya! Have a nice day.")
}
else if(jam <=17){
    window.alert("Hallo Selamat sore "+nama+" Walau hari sudah senja semangat tidak pernah jadi manja.")
}
else{
    window.alert("Hallo! Selamat malam "+nama+" Jangan lupa istirahat! Persiapkan diri untuk menghadapi besok yang lebih baik.")
}
         
