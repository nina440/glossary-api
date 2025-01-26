const termsList = document.getElementById('terms-list');
const termForm = document.getElementById('term-form');
const mindmapDiv = document.getElementById('mindmap');
const termsTab = document.getElementById('terms-tab');
const mindmapTab = document.getElementById('mindmap-tab');
const termsContainer = document.getElementById('terms-container');
const mindmapContainer = document.getElementById('mindmap-container');

// Получение всех терминов
async function fetchTerms() {
  try {
    const response = await fetch('/terms');
    if (!response.ok) throw new Error('Ошибка получения данных');
    const terms = await response.json();

    termsList.innerHTML = ''; // Очищаем старые карточки перед рендером новых
    terms.forEach(term => {
      const card = document.createElement('div');
      card.className = 'card';

      const termName = document.createElement('h3');
      termName.textContent = term.term;

      const termDefinition = document.createElement('p');
      termDefinition.textContent = term.definition;

      const sourcesContainer = document.createElement('div');
      sourcesContainer.className = 'sources';

      term.sources.forEach((source, index) => {
        const sourceButton = document.createElement('a');
        sourceButton.href = source;
        sourceButton.target = '_blank'; // Открывать ссылку в новой вкладке
        sourceButton.className = 'source-button';
        sourceButton.textContent = `Источник ${index + 1}`;
        sourcesContainer.appendChild(sourceButton);
      });

      card.appendChild(termName);
      card.appendChild(termDefinition);
      card.appendChild(sourcesContainer);
      termsList.appendChild(card);
    });

    renderMindMap(terms);
  } catch (error) {
    console.error('Ошибка загрузки терминов:', error);
  }
}


// Отображение семантического графа
async function renderMindMap() {
  try {
    const response = await fetch('/graph');
    if (!response.ok) throw new Error('Ошибка получения данных графа');
    const data = await response.json();

    const nodes = new vis.DataSet(data.nodes);
    const edges = new vis.DataSet(data.edges);

    const options = {
      layout: { hierarchical: { direction: 'LR' } },
      physics: { enabled: true },
      nodes: { shape: 'dot', size: 10, font: { size: 14 } },
      edges: { width: 2, color: { color: '#000', highlight: '#f00' } },
    };

    new vis.Network(mindmapDiv, { nodes, edges }, options);
  } catch (error) {
    console.error('Ошибка отображения графа:', error);
  }
}

// Добавление нового термина
termForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const termName = document.getElementById('term-name').value.trim();
  const termDefinition = document.getElementById('term-definition').value.trim();

  if (!termName || !termDefinition) {
    alert('Пожалуйста, заполните все поля!');
    return;
  }

  try {
    const response = await fetch('/terms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ term: termName, definition: termDefinition }),
    });

    if (!response.ok) throw new Error('Ошибка добавления термина');
    termForm.reset();
    fetchTerms();
  } catch (error) {
    console.error('Ошибка добавления термина:', error);
  }
});

// Переключение вкладок
termsTab.addEventListener('click', () => {
  termsTab.classList.add('active');
  mindmapTab.classList.remove('active');
  termsContainer.classList.remove('hidden');
  mindmapContainer.classList.add('hidden');
});

mindmapTab.addEventListener('click', () => {
  mindmapTab.classList.add('active');
  termsTab.classList.remove('active');
  termsContainer.classList.add('hidden');
  mindmapContainer.classList.remove('hidden');
});

// Загрузка терминов при открытии страницы
fetchTerms();
