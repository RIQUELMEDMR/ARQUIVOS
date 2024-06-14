const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Configuração do multer para salvar arquivos localmente
const upload = multer({ dest: '/tmp/uploads/' });

export const config = {
    api: {
        bodyParser: false
    }
};

export default function handler(req, res) {
    upload.single('file')(req, res, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        const tempPath = req.file.path;
        const targetPath = path.join('/tmp/uploads', req.file.originalname);

        fs.rename(tempPath, targetPath, err => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ message: 'File uploaded successfully' });
        });
    });
              }
