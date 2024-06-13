// api/download.js

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Lógica para buscar o arquivo a ser baixado
        const filePath = '/caminho/para/seu/arquivo.txt'; // Substitua pelo caminho real do arquivo
        
        // Exemplo de envio do arquivo como resposta
        res.status(200).sendFile(filePath);
    } else {
        res.status(405).json({ error: `Método ${req.method} não é permitido. Use GET.` });
    }
}
