#GLOBAL STATE

1. Redux Store: Redux memiliki konsep "store" yang berfungsi sebagai tempat penyimpanan untuk state aplikasi. Saat melakukan fetch data, hasilnya biasanya akan disimpan dalam store agar dapat diakses oleh komponen lain.

2. Action: Anda perlu membuat action (tindakan) Redux yang akan digunakan untuk memicu pengambilan data (fetch data). Action ini akan mengandung jenis tindakan (misalnya, 'FETCH_DATA'), dan action creator yang mengembalikan objek action dengan jenis tersebut.

3. Reducer: Anda juga perlu membuat reducer Redux untuk mengelola state yang berisi data yang diambil. Reducer akan merespons action 'FETCH_DATA' dan mengubah state store sesuai dengan data yang diterima.

4. Middleware: Untuk melakukan fetch data, Anda akan memerlukan middleware Redux seperti Redux Thunk atau Redux Saga. Middleware ini memungkinkan Anda untuk menulis kode asinkron dalam action creator Redux.

5. Async Action: Action creator yang digunakan untuk mengambil data biasanya akan menjadi action asinkron. Anda akan menggunakan middleware untuk mengirim action asinkron yang akan melakukan fetch data dan kemudian mengirim action lain (misalnya, 'FETCH_DATA_SUCCESS' atau 'FETCH_DATA_FAILURE') setelah permintaan selesai.