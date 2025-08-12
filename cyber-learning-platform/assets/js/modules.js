fetch('data/modules.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('modulesList');
    data.forEach(module => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = module.file;
      link.textContent = module.title;
      item.appendChild(link);
      list.appendChild(item);
    });
  });
