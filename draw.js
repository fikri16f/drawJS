//gambar kotak
function kotak(sisi){
    let hasil = '';
    for(let j = 0; j < sisi; j++){
        for(let k = 0; k < sisi; k++){
            hasil += '*';
        }
        hasil += '\n';
    }
        return hasil;
}
console.log('Gambar Kotak : ')
console.log(kotak(5));



//Gambar Segitiga

function segitiga(panjang) {
    let hasil1 = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil1 += '*';
        }
        hasil1 += '\n';
    }
    return hasil1;
}
console.log('Gambar Segitiga : ')
console.log(segitiga(5));

//gambar segitiga terbalik

function segitigaterbalik(panjang1){
    let hasil2 = '';
    for (let a = 0; a < panjang1; a++){
        for (let b = panjang1; b > a; b--){
            hasil2 += '*';
        }
        hasil2 += '\n';
    }
   return hasil2;
}
console.log('Gambar Segitiga Terbalik :')
console.log(segitigaterbalik(5));


//gambar kotak selang-seling
function kotak1(sisi){
    let hasil = '';
    for(let x = 0; x < sisi; x++){
        for(let y = 0; y < sisi; y++){
            if ((x+y) %2 != 0) {
                hasil += '!';
            } else {
                hasil += '*'
            }
        }
        hasil += '\n';
    }
        return hasil;
}
console.log('Gambar Kotak Selang-seling : ')
console.log(kotak1(5));


//gambar kotak pola
function kotak2(sisi){
    let hasil = '';
    for(let x = 0; x < sisi; x++){
        for(let y = 0; y < sisi; y++){
               if((x %2 == 0 || y != 1) && (x %2 == 1 || y  != 2  )){
                hasil += '*';
               }else{
                   hasil += '!'
               }
            }  
            hasil += '\n';  
        }
        
        return hasil;
}
console.log('Gambar Kotak pola: ')
console.log(kotak2(5));
