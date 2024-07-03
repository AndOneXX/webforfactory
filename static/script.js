document.getElementById('submitButton').addEventListener('click', function() {
    const selectedValue = document.getElementById('dropdown').value;

    
    // Запрос к серверу по адресу 
    fetch('/update-file', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: selectedValue })
    })
    // Ответ сервера на запрос
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);

        // Отображение сообщения пользователю
        const messageDiv = document.getElementById('message');
        messageDiv.style.display = 'block';
        messageDiv.textContent = 'Успешно отправлено!';
    })
    .catch((error) => {
        console.error('Error:', error);

        // Отображение сообщения об ошибке
        const messageDiv = document.getElementById('message');
        messageDiv.style.display = 'block';
        messageDiv.textContent = 'Произошла ошибка при отправке данных. Перезагрузите страницу.';
    });
});
