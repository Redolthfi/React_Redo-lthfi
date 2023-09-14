const forms = document.getElementById('myForm');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const emailInput = document.getElementById('email');
const textarea = document.getElementById('message');
    
    function data(){
        forms.addEventListener('submit', (event) => {
            event.preventDefault();
            if(firstName.value.trim() === ''){
                alert('First Name harus diisi')
            }else if(lastName.value.trim() === ''){
                alert('Last Name harus diisi')
            }else if(emailInput.value.trim() === ''){
                alert('Emal Harus diisi')
            }else if(textarea.value.trim() === ''){
                alert('Text harus diisi')
         } else {
             alert(`
             First Name : ${firstName.value}
             Last Name : ${lastName.value}
             Email : ${emailInput.value}
             Text : ${textarea.value}
             `);    
            }
        });
    }
    
    data();
    
    


























    















