const dropArea = document.getElementById('drop-area');
const downloads = document.getElementById('downloads');

// Evitar o comportamento padrão de arrastar e soltar
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Adicionar classe quando o arquivo é arrastado para a área
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
        dropArea.classList.add('dragover');
    }, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
        dropArea.classList.remove('dragover');
    }, false);
});

// Lidar com o evento de soltar o arquivo
dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    handleFiles(files);
}

function handleFiles(files) {
    files = [...files];
    files.forEach(createDownloadLink);
}

function createDownloadLink(file) {
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    link.textContent = `Download ${file.name}`;
    link.style.display = 'block';
    downloads.appendChild(link);
}
