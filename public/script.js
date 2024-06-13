// public/script.js

document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/listFiles') // Endpoint para listar arquivos
        .then(response => response.json())
        .then(data => {
            const fileList = document.getElementById('files');
            data.files.forEach(file => {
                const li = document.createElement('li');
                li.textContent = `${file.name} (${file.size})`;
                fileList.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao obter lista de arquivos:', error));
});
