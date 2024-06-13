// api/listFiles.js

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Lógica para listar os arquivos disponíveis
        const files = [
            { name: 'arquivo1.txt', size: '10KB' },
            { name: 'arquivo2.jpg', size: '100KB' }
            // Adicione mais arquivos conforme necessário
        ];

        res.status(200).json({ files });
    } else {
        res.status(405).json({ error: `Método ${req.method} não é permitido. Use GET.` });
    }
}
