const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const glossary = require('./models/glossary');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('src/public'));

// Получить все термины
app.get('/terms', (req, res) => res.json(glossary));

// Добавить новый термин
app.post('/terms', (req, res) => {
  const { term, definition, related_terms, sources } = req.body;

  if (!term || !definition) {
    return res.status(400).json({ error: 'Поле term и definition обязательны' });
  }

  const newTerm = {
    id: glossary.length + 1,
    term,
    definition,
    related_terms: related_terms || [],
    sources: sources || [],
  };

  glossary.push(newTerm);
  res.status(201).json(newTerm);
});

// Генерация данных для графа
app.get('/graph', (req, res) => {
  const { nodes, edges } = getGraphData(glossary);
  res.json({ nodes, edges });
});

const termsRoutes = require('./routes/termsRoutes');
app.use('/api/terms', termsRoutes);

// Функция формирования графа
function getGraphData(glossary) {
  const nodes = glossary.map(term => ({ id: term.id, label: term.term }));
  const edges = glossary.reduce((acc, term) => {
    term.related_terms.forEach(relatedTermId => {
      if (glossary.find(t => t.id === relatedTermId)) {
        acc.push({ from: term.id, to: relatedTermId });
      }
    });
    return acc;
  }, []);

  return { nodes, edges };
}



// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => console.log(`Сервер работает на http://localhost:${PORT}`));
