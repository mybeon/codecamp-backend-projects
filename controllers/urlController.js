const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  original_url: { type: String, required: true },
  short_url: Number,
});

const Url = mongoose.model("urls", urlSchema);

exports.createShortUrl = async (req, res) => {
  const { url } = req.body;
  const regex = /^https:\/\/[a-z0-9_.-]+\.[a-z]+$/;
  if (!regex.test(url)) {
    return res.json({ error: "invalid url" });
  }
  const count = await Url.countDocuments({});
  const newUrl = {
    original_url: url,
    short_url: count + 1,
  };
  const urlDb = new Url(newUrl);
  urlDb.save((err) => {
    if (err) {
      console.log(err);
      return res.json({ error: "db problem" });
    }
    res.json(newUrl);
  });
};

exports.findShortUrlById = async (req, res) => {
  const { id } = req.params;
  const url = await Url.findOne({ short_url: id });
  if (!url) {
    return res.json({ error: "invalid short url" });
  }
  res.redirect(url.original_url);
};
