exports.response = (req, res) => {
  let input = req.params.date;
  if (/^[0-9]*$/.test(input)) {
    input = +input;
  }
  const date = new Date(input).toString();
  const unix = Date.parse(date);
  res.json({ unix, utc: date });
};
