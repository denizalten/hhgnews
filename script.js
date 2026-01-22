fetch('news.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('news-container');
    if(data.length === 0){
      container.innerHTML = "<p>Keine Nachrichten vorhanden.</p>";
      return;
    }
    data.forEach(nachricht => {
      const div = document.createElement('div');
      div.className = 'news-item';
      div.innerHTML = `
        <h2>${nachricht.title}</h2>
        <p>${nachricht.content}</p>
        <small>${nachricht.date}</small>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Fehler beim Laden der Nachrichten:', err));
