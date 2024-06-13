Dropzone.autoDiscover = false;

var myDropzone = new Dropzone("#uploadArea", {
    url: "/upload", // URL Do Seu Endpoint De Upload No Vercel
    method: "post",
    maxFilesize: 100, // Tamanho Máximo Do Arquivo Em MB
    paramName: "file", // Nome Do Parâmetro Que Envia O Arquivo
    dictDefaultMessage: "Arraste e solte os arquivos aqui ou clique para fazer upload."
});

// Mostrar Arquivos Disponíveis
fetch('/listFiles') // URL Do Seu Endpoint Para Listar Arquivos No Vercel
    .then(response => response.json())
    .then(data => {
        var fileList = document.getElementById('files');
        data.files.forEach(file => {
            var li = document.createElement('li');
            li.textContent = file.name;
            fileList.appendChild(li);
        });
    })
    .catch(error => console.error('Erro ao obter lista de arquivos:', error));
