const form = document.querySelector('#Myform');
const nama = document.getElementById('Product Name');
const harga = document.getElementById('price');

// Setting maxLength
nama.maxLength = 25

function Limit(){
    if(nama.value.length > 10 ) {
        alert('Last Name must not exceed 25 characters.')
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log(nama.value.length);
      
    const inputan = document.querySelectorAll('input')
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
    

    // const loop = setInterval(() => {
    //     if(nama.value.length > 10 ) {
    //         alert('Last Name must not exceed 25 characters.')
    //         // const notif = document.getElementById('notif-1')
    //         // notif.innerText = "penuh"
    
    //         nama.value = '';
    //     }
    // }, 100);
    // if(!nama.value.match(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)){
    //     alert('Name must not contain symbols');
    // }
        // const notif = document.getElementById('notif-1')
        // notif.innerText = "penuh"