<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Verificar se o arquivo é uma imagem ou um vídeo
$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
if($check !== false) {
    $uploadOk = 1;
} elseif (in_array($imageFileType, array("mp4", "avi", "mov", "3gp", "mpeg"))) {
    $uploadOk = 1;
} else {
    echo "Arquivo Não É Uma Imagem Ou Um Vídeo.";
    $uploadOk = 0;
}

// Verificar se o arquivo já existe
if (file_exists($target_file)) {
    echo "Desculpe, O Arquivo Já Existe.";
    $uploadOk = 0;
}

// Verificar o tamanho do arquivo (50MB máximo)
if ($_FILES["fileToUpload"]["size"] > 50000000) {
    echo "Desculpe, Seu Arquivo É Muito Grande.";
    $uploadOk = 0;
}

// Permitir certos formatos de arquivo
if($uploadOk == 1) {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "O Arquivo ". htmlspecialchars(basename($_FILES["fileToUpload"]["name"])). " Foi Enviado.";
    } else {
        echo "Desculpe, Houve Um Erro Ao Enviar Seu Arquivo.";
    }
}
?>
<br>
<a href="index.html">Voltar</a> um erro ao enviar seu arquivo.";
    }
}
?>
<br>
<a href="index.html">Voltar</a>arquivo</a>";
        } else {
            echo "Desculpe, ocorreu um erro ao enviar o seu arquivo.";
        }
    }
}
?>