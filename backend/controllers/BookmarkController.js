// controllers/BookmarkController.js
const Bookmark = require('../models/Bookmark');

module.exports = {
  createBookmark: async (req, res) => {
    const newBookmark = new Bookmark(req.body);
    try {
      await newBookmark.save();
      res.status(201).json({ message: "Bookmark created successfully", bookmark: newBookmark });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create bookmark" });
    }
  },
  getAllBookmark: async (req, res) => {
    try {
      const bookmarks = await Bookmark.find().sort({ createdAt: -1 });
      res.status(200).json(bookmarks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to get bookmarks" });
    }
  },
};
