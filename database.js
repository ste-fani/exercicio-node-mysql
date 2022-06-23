const connection = require('./connection');

const selectTracks = (req, res) => {
    connection.query('SELECT * FROM playlist', (err, result) => {
        if(err) {
            throw err
        };
        res.status(200).send(result);
    })
}

const insertTrack = (req, res) => {
    const { name, artist, url } = req.body;
    connection.query(`INSERT INTO playlist (name, artist, url) VALUES ('${name}', '${artist}', '${url}')`, (err) => {
        if(err) {
            throw err;
        }
        res.status(200).send("Música adicionada.")
    })
}

const updateURL = (req, res) => {
    const id = req.params.id;
    const url = req.body.url;
    connection.query(`UPDATE playlist SET url = '${url}' WHERE id = '${id}'`, (err) => {
        if(err) {
            throw err;
        }
        res.status(200).send("Música atualizada.")
    })
}

const deleteTrack = (req, res) => {
    const id = req.params.id;
    connection.query(`DELETE FROM playlist WHERE id = '${id}'`, (err) => {
        if(err) {
            throw err;
        }
        res.status(200).send("Música deletada.")
    })
}

module.exports = { selectTracks, insertTrack, updateURL, deleteTrack };