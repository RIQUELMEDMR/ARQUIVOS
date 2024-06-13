module.exports = async (req, res) => {
    try {
        const file = req.files.file;
        // Aqui você implementa a lógica para salvar o arquivo, por exemplo, em um storage como AWS S3
        res.status(200).json({ message: 'Upload successful!' });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ message: 'Upload failed!' });
    }
};
