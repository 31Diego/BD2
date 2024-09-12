
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitFormButton');
    if (submitButton) {
        submitButton.addEventListener('click', function(event) {
            
            event.preventDefault();
            
            if (validateForm()) {
              
                document.getElementById('yourFormId').submit();
            } else {
                
                console.log('Formulario inválido');
            }
        });
    }
});

function validateForm() {

    const textField = document.getElementById('yourTextFieldId');
    if (textField.value === '') {
        alert('Por favor, completa todos los campos requeridos.');
        return false;
    }
    return true;
}
