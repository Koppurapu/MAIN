/*GET homepage */
const index=(req, res) => {
  res.render('index', { title: 'Hello dr' });
};

module.exports = {
  index
};