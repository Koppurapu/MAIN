// About Page Controller
exports.getAboutPage = (req, res) => {
    res.render('about', {
        title: 'About Us',
        description: 'Learn more about our mission, team, and values.',
        currentYear: new Date().getFullYear()
    });
};
