const { createServer } = require('http');
const { parse } = require('url');
const { send, createError } = require('micro');
const fs = require('fs');
const { promisify } = require('util');
const formidable = require('formidable');

const UPLOAD_DIR = './uploads';

// Utilitário para criar diretório de uploads se não existir
const mkdir = promisify(fs.mkdir);

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    // Cria o diretório de uploads se não existir
    await mkdir(UPLOAD_DIR, { recursive: true });

    const form = new formidable.IncomingForm();
    form.uploadDir = UPLOAD_DIR;

    form.parse(req, (err, fields, files) => {
      if (err) {
        return send(res, 500, { error: 'Erro ao fazer upload do arquivo.' });
      }

      const file = files.file;
      if (!file) {
        return send(res, 400, { error: 'Nenhum arquivo enviado.' });
      }

      const filePath = file.path;
      const fileName = file.name;

      const downloadUrl = `${process.env.VERCEL_URL}/api/download/${fileName}`;

      send(res, 200, { downloadUrl });
    });
  } else {
    const error = createError(405, 'Método não permitido');
    throw error;
  }
};
