const express = require('express')
const router = express.Router();
const  { selectTracks, insertTrack, updateURL, deleteTrack } = require('./database')

router.get('/', selectTracks);
router.post('/', insertTrack);
router.put('/:id', updateURL);
router.delete('/:id', deleteTrack);

module.exports = router;