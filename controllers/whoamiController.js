exports.response = (req, res) => {
  res.json({ ipaddress: req.ip, language: req.headers["accept-language"], software: req.headers["user-agent"] });
};
