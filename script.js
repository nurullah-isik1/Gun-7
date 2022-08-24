function hesapla(){
    var vize=document.getElementById("vize").value;
    var vize=document.getElementById("vize2").value;
    var final=document.getElementById("final").value;

    var vizeNotu= Number(vize);
    var vizeNotu2= Number(vize);
    var finalNotu = Number(final);

    var ortalama = vizeNotu * 0.2+vizeNotu * 0.2+ finalNotu * 0.6;
    
    
    if(ortalama >= 84.5 && ortalama <= 100)
        document.getElementById("sonuc").innerHTML="Ortalama : " + ortalama + " => AA";
    else if(ortalama >= 69.5 && ortalama < 84.5)
        document.getElementById("sonuc").innerHTML="Ortalama : " + ortalama + " => BB";
    else if(ortalama >= 59.5 && ortalama < 69.5)
        document.getElementById("sonuc").innerHTML="Ortalama : " + ortalama + " => CC";
    else if(ortalama >= 49.5 && ortalama < 59.5)
        document.getElementById("sonuc").innerHTML="Ortalama : " + ortalama + " => DD";
    else
        document.getElementById("sonuc").innerHTML="Ortalama : " + ortalama + " => FF";

}

var hesaplaBtn=document.getElementById("hesapla");
hesaplaBtn.onclick=hesapla;

function kaydet(){
    var isim = document.getElementById("isim").value;
    var soyisim = document.getElementById("soyisim").value;
    localStorage.setItem('isim', isim);
    localStorage.setItem('soyisim', soyisim);
    
  }
  
  function sayfa1(){
    window.location.assign('index.html');
  }
  
  function sayfa2(){
  
    window.location.assign('sayfa2.html');
  }