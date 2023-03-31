# Javascript Conditional Looping

## Exercise 1

- Buat sebuah program yang menampilkan teks ‘User ke - 1 ... User ke - 100’ pada setiap baris di
  halaman HTML.
- Lakukan FOR LOOP pada Javascript.

### Penjelasan

- for(inisialisasi;kondisi; operator), inisialisasi dimulai dari 0, lalu kondisinya kurang dari sama dengan 100, untuk operatornya adalah increment dimana setiap loop nilai dari inisialisasi akan ditambah dengan 1

- Setiap looping elemen dengan id `exercise1` akan disisipkan tag `<h3>` dengan value User ke-n, dimana nilai n ini dari nilai inisialisasi

## Exercise 2

Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.

- Nilai awal = 0
- Pengulangan = 10 kali
- Nilai awal ditambah 2 setiap pengulangan
- Tampilan hasil penambahan pada setiap pengulangan

### Penjelasan

- for(inisialisasi;kondisi; operator), inisialisasi dimulai dari 0, lalu kondisinya kurang dari sama dengan 100, untuk operatornya inisialisasi akan ditambah dengan 2

- Setiap looping elemen dengan id `exercise2` akan disisipkan tag `<h3>` dengan value Nilai = n, dimana nilai n ini dari nilai inisialisasi

## Exercise 3

Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.

- Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
- Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan

### Penjelasan

- for(inisialisasi;kondisi; operator), inisialisasi dimulai dari 0, lalu kondisinya kurang dari sama dengan 20, untuk operatornya adalah increment dimana setiap loop nilai dari inisialisasi akan ditambah dengan 1

- Setiap looping elemen dengan id `exercise3` akan disisipkan tag `<h3>` dengan value Angka n, dimana nilai n ini dari nilai inisialisasi, lalu jika n habis dibagi 2 maka akan menambahkan text genap, jika tidak maka akan menambahkan text ganjil

## Exercise 4

Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();

- Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
- Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
- Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan
  sebanyak ...jumlah klik OK yang dilakukan user)

### Penjelasan

- Function showPopup akan dijalankan ketika button Show popup diklik.
- Menginisialisasi variabel isValid dengan value true, dan variabel count 0
- Terdapat perulangan while, dimana perulangan akan terus berjalan jika nilai isValid adalah `true`
- Selanjutnya ada method confirm yang akan menampilkan kotak dialog dengan pesan `Apakah anda mau mengulang ?`
- Jika user memilih `OK` maka variabel count akan ditambah dengan 1, lalu method confirm akan ditampilkan kembali
- Jika user memilih `Cancel` maka variabel isValid akan diganti menjadi false, lalu akan menampilkan alert `Perulangan sebanyak n` n adalah value dari variabel count

## Exercise 5

Buat sebuah program kuis.

- Tampilkan prompt) untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari
  nama IB (Impact Byte)?"
- Lakukan pengecekan apakah jawaban dari user sudah benar
- Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
- Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user
  benar

### Penjelasan

- Function showQuiz akan dijalankan ketika button Show quiz diklik.
- Menginisialisasi variabel correct dengan value false
- Terdapat perulangan while, dimana perulangan akan terus berjalan jika nilai correct adalah `true`
- Selanjutnya ada method prompt akan menampilkan kotak dialog yang meminta user untuk input
- Jika inputan user benar maka variabel correct akan berubah menjadi `true`, lalu memunculkan alert `Selamat jawaban kamu sudah benar`, akhirnya perulangan selesai
- Jika inputan user salah maka variabel correct akan tetap `false` dan perulangan akan terus berlajan
