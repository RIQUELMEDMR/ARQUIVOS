// api/upload.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Aqui você pode processar o upload de arquivos
        // Exemplo: salvar o arquivo em algum lugar
        // const file = req.body.file;
        
        // Exemplo de resposta
        res.status(200).json({ message: 'Upload realizado com sucesso!' });
    } else {
        res.status(405).json({ error: `Método ${req.method} não é permitido. Use POST.` });
    }
}
