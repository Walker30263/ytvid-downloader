const express = require('express');
const ytdl = require('ytdl-core');
const cors = require('cors');

const app = express();

app.listen(4000, () => {
    console.log("yayyayayyyyy it connected to #port4000");
});

app.get('/download', (req, res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment;filename="downloaded.mp4"');

    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);
});