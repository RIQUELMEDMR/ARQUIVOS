// api/upload.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Lógica para processar o upload de arquivos
        const { file } = req.body; // Supondo que 'file' seja o nome do parâmetro enviado no corpo da requisição

        // Exemplo de resposta
        res.status(200).json({ message: `Arquivo ${file} enviado com sucesso!` });
    } else {
        res.status(405).json({ error: `Método ${req.method} não é permitido. Use POST.` });
    }
}
