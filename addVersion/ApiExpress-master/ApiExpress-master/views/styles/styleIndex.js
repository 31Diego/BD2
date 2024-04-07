document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('loadUsersBtn').addEventListener('click', function() {
        fetch('/routes/users') 
            .then(response => response.json())
            .then(data => {
                const usersList = document.getElementById('usersList');
                usersList.innerHTML = ''; 

                data.forEach(user => {
                    const userElement = document.createElement('div');
                 
                    userElement.innerHTML = `<strong>Nombre:</strong> ${user.firstName} ${user.lastName}<br>
                                             <strong>Email:</strong> ${user.email}<br>
                                             <strong>Teléfono:</strong> ${user.phoneNumber}`;
                 
                    usersList.appendChild(userElement);
                });
            })
            .catch(error => console.error('Error al cargar usuarios:', error));
    });
});

