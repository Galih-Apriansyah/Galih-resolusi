import os

os.system('clear')
print '============Galih================'
print '(1) penjumlahan'
print '(2) pengurangan'
print '(3) perkalian'
print '(4) pembagian'
print '==========Apriansyah============='

plih = input('masukkan pilihan anda : ')
if plih == 1:
     print
     angka1 = input('masukkan angka pertama : ')
     angka2 = input('masukkan angka kedua : ')
     total = angka1 + angka2
     print'hasil penjumlahan', total
