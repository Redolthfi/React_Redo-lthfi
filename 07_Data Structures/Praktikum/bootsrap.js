function validateProductName() {
    const productNameInput = document.getElementById("validationDefault01");
    const productPriceInput = document.getElementById("validationDefault05");
    const alertMessage = document.getElementById("validationServer01Feedback");
    const MassageALRT = document.getElementById("alrt1")
    
    productNameInput.maxLength = 25

    
    if (productNameInput.value.length > 10) {
        alertMessage.classList.add("is-invalid");
        alertMessage.style.display = "block"; // Display the error message
    } else {
        alertMessage.classList.remove("is-invalid")
        alertMessage.style.display = "none"; // Hide the error message
    }  if (productNameInput.value === "0" || productPriceInput.value === "0") {
        MassageALRT.style.display = "block"; // Display the error message
    } else {
        MassageALRT.style.display = "none"; // Hide the error message

        // Proceed with form submission or other actions
    }
}