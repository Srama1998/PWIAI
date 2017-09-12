function witaj(imie){
    document.write('Witaj ' + imie + '<br>');
    
}
function poleProstokata(a,b){
    var pole = a * b;
    document.write(pole);
}
var a = prompt();
var b = prompt();
var name = 'Janusz'
witaj(name);
poleProstokata(a,b);

function poleObjętość(a,b,h){
    var pole = a*b;
    var objetosc = pole*h;
    var wynik = [pole, objetosc]
    return wynik;}
var a=prompt('Podaj długość');
var b=prompt('Podaj długość');
var h=prompt('Podaj szerokość');


var x = prompt ('Podaj wartość, 0-pole, 1-objętość');
var poleProstokata = poleObjętość(a,b,h)[x];
console.log(poleProstokata);

/*Napisz skrypt który oblicza obwód, pole koła oraz objętość stożka. Dame urzytkownik podaje z klawiatury wykorzystaj obiekt math. urzytkownik wybiera za pomocą pola radio. dane wyświetl w bloku strony*/

function koloStozek(promien, wysokosc){
    var obwodKola=2*math.

}
