const dropArea = document.getElementById('dropArea');

// Impedir comportamento padrão ao arrastar e soltar
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Highlight da área de drop
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
    dropArea.classList.add('highlight');
}

function unhighlight(e) {
    dropArea.classList.remove('highlight');
}

// Manipular o drop de arquivos
dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;

    handleFiles(files);
}

function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
        uploadFile(files[i]);
    }
}

function uploadFile(file) {
    let formData = new FormData();
    formData.append('file', file);

    // Aqui você pode implementar a lógica para enviar o arquivo para o backend

    // Exemplo simples: criar link de download na página
    let downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(file);
    downloadLink.textContent = `${file.name} (${formatBytes(file.size)})`;
    downloadLink.setAttribute('download', file.name);

    document.getElementById('downloadLinks').appendChild(downloadLink);
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
      }
