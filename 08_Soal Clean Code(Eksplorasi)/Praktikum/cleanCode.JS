const form = document.querySelector('#Myform');
const nama = document.getElementById('ProductName');
const harga = document.getElementById('price');

// Mengatur panjang maksimal nama produk
nama.maxLength = 25;

function validateName() {
    if (nama.value.length > 10) {
        alert('Product Name must not exceed 10 characters.');
    }
}

// Memeriksa validitas seluruh formulir saat di-submit
function validateForm() {
    const inputElements = document.querySelectorAll('input');

    inputElements.forEach(element => {
        if (element.value.length === 0) {
            if (element.id === 'ProductName') {
                alert('Please enter a valid Product name');
            } else {
                alert(`The ${element.id} field must be filled in`);
            }
        } else if (element.id === 'ProductName' && !element.value.match(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)) {
            alert('Product Name must not contain symbols');
        }
    });
}

// Menambahkan event listener untuk form submission
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(nama.value.length);
    validateName();
    validateForm();
});