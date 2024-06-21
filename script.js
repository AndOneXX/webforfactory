document.getElementById('submitButton').addEventListener('click', function() {
    const selectedValue = document.getElementById('dropdown').value;
    
    fetch('/update-file', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: selectedValue })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
