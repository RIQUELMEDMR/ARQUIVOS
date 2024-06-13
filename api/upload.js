module.exports = async (req, res) => {
    try {
        const file = req.files.file;
        BLOB_READ_WRITE_TOKEN="vercel_blob_rw_LmkH331Rnpz2jpQ4_zEXp9tTiCdolFfb2emmLwIgsyQaLoA"
        res.status(200).json({ message: 'Upload successful!' });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ message: 'Upload failed!' });
    }
};
