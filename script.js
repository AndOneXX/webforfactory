document.getElementById('submitButton').addEventListener('click', function() {
    const selectedValue = document.getElementById('dropdown').value;
    // Запрос к серверу по адресу /update-file
    fetch('/localhost:5000', {
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
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
