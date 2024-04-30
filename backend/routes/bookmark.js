const router = require('express').Router();
const BookmarkController = require('../controllers/BookmarkController');

router.get('/', BookmarkController.getAllBookmark);
router.post('/create', BookmarkController.createBookmark);

module.exports = router;
