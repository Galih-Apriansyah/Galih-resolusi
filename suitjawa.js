var tanya = true;
while ( tanya ) {
// menangkap pilihan player
var p = prompt('silahkan pilih : GAJAH, SEMUT, ORANG')

// menangkap pilihan computer
// membangkitkan bilangan random
var comp = Math.random();

if( comp < 0.34 ) {
  comp = 'GAJAH';
} else if ( comp >= 0.34 && comp < 0.67 ) {
  comp = 'SEMUT';
} else {
  comp = 'ORANG';
}

var hasil = '';

// menentukan rules
if( p == comp ) {
  hasil = 'SERI!';
} else if( p == 'GAJAH' ) {
  hasil = ( comp == 'ORANG' ) ? 'MENANG!' : 'KALAH!';
} else if( p == 'SEMUT' ) {
  hasil = ( comp == 'GAJAH'  ) ? 'MENANG!' : 'KALAH!';
} else if( p == 'ORANG' ) {
  hasil = ( comp == 'SEMUT' ) ? 'MENANG!' : 'KALAH!';
} else {
  alert('ANDA MEMASUKKAN PILIHAN YANG SALAH')
}


// tampilkan hasilnya
alert('Kamu memilih ' + p + ' dan komputer memilih ' + comp + '\nmaka hasilnya ' + hasil)

tanya = confirm('Apakah ingin bermain lagi??');
}
alert('terimakasih telah bermain game sederhana ini')