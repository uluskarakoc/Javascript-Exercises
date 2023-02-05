// 1 - Bir sayinin 10-50 arasinda olup olmadigini kontrol ediniz.
// 1-Kontrollieren sie ob ein irgendzahl zwischen 10-50 sind?
let zahl =21;
if(zahl<50 && zahl>10){
    console.log(`1--${zahl} ist zwischen 10 und 50.`)
}

// 2 - Bir sayinin pozitif tek sayi olup olmadigini kontrol ediniz.
// 2-Kontrollieren sie ob ein irgendzahl positiv und ungerade zahl ist?
 zahl =21;
 if(zahl%2 == 1 && zahl>0){
    console.log(`2--${zahl} ist ungerade und positiv.`)
} 

// 3 - x, y, z sayilarinin büyüklük karsilastirilmasini yapiniz.(else if'i arastiriniz.)
// 3-Vergleichen sie die zahlen, die x,y,z sind, als große?
let x =21
let y =33
let z =12
if(x>y && x>z){
console.log(`x en büyüktür`)
}else if(y>x && y>z){
    console.log(`3--y en büyüktür`)
}else if(z>y && z>x){
    console.log(`z en büyüktür`)
}

// 4 - 2 vize ve 1 final notuna göre hesaplanan ortalama icin;
// 4-nach angaben die 3 note Durschnitt
let vise1=10
let vise2 =3
let final =70
console.log((((vise1+vise2)/10)*4 + (final/10)*6))
// a - Eger ortalama 50 ve üstündeyse gecti, degilse kaldi yazsin.
if((((vise1+vise2)/10)*4 + (final/10)*6)>50){
    console.log(`4-a gectiniz`)
}else{
    console.log(`4-a kaldiniz`)
}
// b - Gecmek icin ortalama 50 bile olsa final notu en az 50 olmalidir.
if(((((vise1+vise2)/10)*4 + (final/10)*6)>50) && final>50){
    console.log(`4-b gectiniz`)
}else{
    console.log(`4-b kaldiniz`)
}
// c - Finalden 70 alindiginda ortalama 50' nin altinda olsa bile dersten gecilsin.
if(((((vise1+vise2)/10)*4 + (final/10)*6)>50) || final>=70){
    console.log(`4-c gectiniz`)
}else{
    console.log(`4-c kaldiniz`)
}

