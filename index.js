const express = require('express');
const multer = require('multer');
const path = require('path');
//app.use(express.static(path.join(__dirname, 'public')));
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/upload', upload.single('code'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const filePath = req.file.path;
    const fileExtension = path.extname(req.file.originalname).toLowerCase();
    
    let language = '';

    switch (fileExtension) {
        case '.java':
            language = 'Java';
            break;
        case '.py':
            language = 'Python';
            break;
        default:
            return res.status(400).send('Unsupported file format.');
    }

    res.send(`Detected language: ${language}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
