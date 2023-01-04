# DNS Lookup

Skrip ini akan melakukan pencarian alamat IP dari sejumlah domain yang diberikan. Pencarian alamat IP akan dilakukan menggunakan module dns dan hasilnya akan disimpan ke dalam sebuah file.

## Cara Penggunaan
Untuk menjalankan skrip ini, pastikan terlebih dahulu Anda sudah memasang module fs dan dns dengan perintah berikut:

1. npm install fs dns
2. node dns.js <nama_file>

Di mana <nama_file> adalah nama file yang berisi daftar domain yang akan dicari alamat IP-nya (satu domain per baris).
Hasil pencarian akan ditampilkan ke console dan disimpan ke dalam file results.txt.

## Keterangan

Jika pencarian alamat IP berhasil, maka akan ditampilkan pesan IP address for "<domain>": <alamat_ip> di console, di mana <domain> adalah domain yang dicari dan <alamat_ip> adalah alamat IP yang ditemukan.
Jika pencarian alamat IP gagal, maka akan ditampilkan pesan Error resolving domain "<domain>": <error_message> di console, di mana <domain> adalah domain yang dicari dan <error_message> adalah pesan error yang terjadi.
Pencarian alamat IP akan terhenti setelah 10 detik jika tidak ada hasil yang ditemukan.



## Lisensi
Script ini tersedia di bawah lisensi MIT. Lihat file [LICENSE](LICENSE)
