Stateful Component:
1. Memiliki State: Stateful komponen memiliki state internal yang dapat digunakan untuk menyimpan data yang dapat berubah selama siklus hidup komponen.

2. Menggunakan class: Stateful komponen didefinisikan sebagai kelas JavaScript yang memperluas React.Component dan menggunakan metode render() untuk mengembalikan elemen-elemen React.

3. Component Lifecycle: Stateful komponen memiliki siklus hidup yang melibatkan metode-metode seperti componentDidMount, componentDidUpdate, dan componentWillUnmount yang memungkinkan Anda untuk mengelola perilaku komponen pada berbagai tahapan.

4. State dan Props: Stateful komponen dapat memiliki state dan menerima props sebagai argumen untuk mengkonfigurasi perilaku mereka.

5. Update State: Anda dapat mengubah state dalam stateful komponen menggunakan metode setState(), yang akan memicu perenderan ulang komponen.

Stateless Component:

1. Tidak Memiliki State: Stateless komponen tidak memiliki state internal. Mereka hanya menerima props sebagai argumen dan mengembalikan tampilan berdasarkan props tersebut.

2. Menggunakan Fungsi: Stateless komponen didefinisikan sebagai fungsi JavaScript biasa. Mereka lebih sederhana dan ringkas dibandingkan dengan komponen berbasis kelas.

3. Reusabilitas: Stateless komponen umumnya lebih mudah digunakan kembali karena mereka hanya bergantung pada data yang diterima melalui props dan tidak memiliki state internal.

Event Handling:

1. Event Handling di React: Dalam React, event handling  dapat dilakukan dengan menambahkan atribut event seperti onClick, onChange, dan sebagainya pada elemen HTML yang digunakan dalam komponen React.

2. Fungsi Event Handler: Event handler adalah fungsi JavaScript yang dijalankan ketika sebuah peristiwa terjadi. Anda dapat menyatakan fungsi tersebut dalam metode komponen atau di luar komponen.

3. this dalam Stateful Komponen: Dalam stateful komponen, Anda perlu memperhatikan konteks this. Biasanya, Anda perlu menggunakan .bind(this) atau mengonversi fungsi ke bentuk arrow function agar this merujuk pada komponen.

4. Penanganan Peristiwa di Stateless Komponen: Dalam stateless komponen, Anda dapat menangani peristiwa dengan mudah tanpa perlu khawatir tentang this, karena mereka adalah fungsi murni.

5. Props dalam Event Handling: Anda dapat mengirimkan fungsi sebagai props dari komponen induk ke anak untuk menangani peristiwa di komponen anak.

6. preventDefault: Untuk menghentikan perilaku bawaan peristiwa, Anda dapat menggunakan event.preventDefault() dalam handler jika diperlukan.