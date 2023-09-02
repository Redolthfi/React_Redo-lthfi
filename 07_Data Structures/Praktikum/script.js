const form = document.querySelector('#Myform');
const nama = document.getElementById('ProductName');
const harga = document.getElementById('price');

// Setting maxLength
nama.maxLength = 25

  const products = []; // Array untuk menyimpan data produk

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Myform");
    form.addEventListener("submit", handleFormSubmit);
  });

  function handleFormSubmit(event) {
    event.preventDefault();

    // Mengambil nilai dari input-form
    const productName = document.getElementById("ProductName").value;
    const category = document.getElementById("category").value;
    const freshness = document.querySelector('input[name="product-fras"]:checked').value;
    const image = document.getElementById("fileProduct").value;
    const additionalDescription = document.querySelector('textarea').value;
    const productPrice = document.getElementById("price").value;

    // Membuat objek yang merepresentasikan produk
    const product = {
      name: productName,
      category: category,
      freshness: freshness,
      image: image,
      additionalDescription: additionalDescription,
      productPrice: productPrice
    };

    // Menambahkan objek produk ke dalam array produk
    products.push(product);

    // Mengosongkan formulir
    form.reset();

    // Memperbarui tabel produk
    updateProductTable(product);
  }

  function updateProductTable(product) {
    const tableBody = document.querySelector("#productTable tbody");
    const row = tableBody.insertRow(); // Membuat baris baru

    const cellIndex = row.insertCell(0);
    cellIndex.textContent = tableBody.rows.length; // Nomor urutan

    const cellName = row.insertCell(1);
    cellName.textContent = product.name;

    const cellImage = row.insertCell(2);
    // Tambahkan logika untuk menampilkan gambar
    const image = document.createElement("img");
    image.src = product.image; // Path gambar dari input file
    image.alt = "Default Name"; // Gantilah dengan nama default jika perlu
    image.width = 50; // Atur ukuran gambar sesuai kebutuhan
    cellImage.appendChild(image);

    const cellFreshness = row.insertCell(3);
    cellFreshness.textContent = product.freshness;

    const cellDescription = row.insertCell(4);
    cellDescription.textContent = product.additionalDescription;

    const cellPrice = row.insertCell(5);
    cellPrice.textContent = product.productPrice;
  }




function Limit(){
    if(nama.value.length > 10 ) {
        alert('Last Name must not exceed 25 characters.')
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log(nama.value.length);

    

    const inputan = document.querySelectorAll('.forms')
    inputan.forEach(element => {
        if(element.value.length == 0 && element.id != 'Product Name'){
            alert('The ' + element.id + ' field must be filled in')
        }else if(element.id == 'Product Name' && element.value.length == 0){
            alert('Please enter a valid Prouct name')
        }

        if(element.id == 'Product Name' && element.value.length != 0){
            if(!element.value.match(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)){
                alert('Name must not contain symbols'); 
            }
        }
    });
})





    

