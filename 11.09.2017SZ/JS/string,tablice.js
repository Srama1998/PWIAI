var text='ZSK - Zespół Szkół Komunikacji';
console.log(text.length); //30 znaków

var pierwszy = text.charAt();
console.log(pierwszy); //Z

var ostatni = text.charAt(text.length-1);
console.log(ostatni); //i

//document.write(text[11]); //ł

//ASCII
document.write(text.charCodeAt(0)+'<br>'); //Z =>90
document.write(text.charCodeAt(14) + '<br>'); //Z =>122

//zamiana na duże litery
var duze = text.toUpperCase();
var male = text.toLowerCase();
console.log(duze);//tylko durze litery
console.log(male);//tylko małe litery

//camelCase zapis zmiennej
var duzaMala = text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();
console.log(duzaMala);

//Urzytkownik wprowadza z klawiatury swoje imie zamień pierwszy znak na dużą literę a pozostałe na małe wyświetl wszystkow nagłówku drugiego stopnia w kolorze niebieskim

/*
var imie = prompt('podaj imie');
var poprawneImie = imie.charAt(0).toUpperCase()+imie.slice(1).toLowerCase();
document.getElementById('niebieski').innerHTML=poprawneImie;
*/

//text.substr(1-od którego znaku,3 - ilość wypisanych znaków)
/*console.log(imie.substr(1,imie.length-2));*/




//tablice

//tworzenie tablicy za pomocą literału tablicy
var kolory = ['biały', 'zielony', 'czerwony'];
var elKolor = document.getElementById('kolor');
elKolor.textContent = kolory[0];

//tworzenie tablicy za pomocą konstruktora tablicy Array
var samochody = new Array('BMW', 'Audi', 'Ferrari', 'Fiat');
console.log(samochody[0]);//BMW
console.log(samochody[samochody.length-1]);//Ferrari
console.log('ilość elementów w tablicy '+ samochody.length);

var noweAuto = prompt('podaj nowe auto');
samochody[0]=noweAuto;
console.log(samochody);

//tablice wielowymiarowe
var tab = new Array (
    new Array('Jan', 'Kowalski','Poznań'),
    new Array('Anna', 'Nowak','Gniezno'),
    new Array('Maria', 'Adamiak','Poznań')

);
console.log(tab[1][2]);

var imiona = ['Janusz', 'Adrian', 'Andrzej','Zenon'];
console.log(imiona);
var posortowaneImiona=imiona.sort();
console.log(posortowaneImiona);

var odwrocImiona = posortowaneImiona.reverse();
odwrocImiona.pop();
console.log(odwrocImiona);

//dodanie elementu na początku tablicy
odwrocImiona.unshift('Paweł');
odwrocImiona.push('Krystian');
console.log(odwrocImiona);

//sprawdzenie czy istnieje element w tablicy
console.log(odwrocImiona.indexOf('Paweł'));//0 podaje miejce w tablicy
console.log(odwrocImiona.indexOf('Józek'));//-1 nie znajduje się w tablicy

//tablice z cyframi
var cyfry = [1, 2, 20, 30, 100, -500, 1000000];
console.log(cyfry);
var posortowaneCyfry = cyfry.sort();
console.log(posortowaneCyfry);

var sortujCyfryPrawidlowo = cyfry.sort(function(a,b){return (a-b);})
console.log(sortujCyfryPrawidlowo);

//zad. dom. utwórz formularz z loginem(text) i hasłem(password). Zapisz dane w tablicy. Zapisz wynik w nagłówku drugiego stopnia urzytkownik podaje również kolor w jakim ma być wszystko wyświetlone