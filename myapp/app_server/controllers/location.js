// Location Page Controller
exports.getLocationPage = (req, res) => {
    res.render('location', {
        title: 'medchal',
        address: '123 Main Street, Hyderabad, Telangana, India',
        phone: '+91-9876543210',
        email: 'contact@healthcare.com',
        mapEmbedUrl: 'https://www.google.com/maps/embed?...', // Optional: Embed Google Maps URL
        currentYear: new Date().getFullYear()
    });
};
