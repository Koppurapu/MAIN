fetch('http://localhost:5000/api/facilities')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('facility-list');
    data.forEach(f => {
      const div = document.createElement('div');
      div.className = 'facility';
      div.innerHTML = `<strong>${f.name}</strong><br/>Type: ${f.type}<br/>Availability: ${f.availability}`;
      list.appendChild(div);
    });
  });