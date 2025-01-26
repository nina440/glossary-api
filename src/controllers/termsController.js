const glossary = require('../models/glossary');

const getAllTerms = (req, res) => res.json(glossary);

const getTermById = (req, res) => {
  const term = glossary.find(t => t.id === parseInt(req.params.id));
  if (!term) return res.status(404).json({ error: 'Термин не найден' });
  res.json(term);
};

const addTerm = (req, res) => {
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
};

const updateTerm = (req, res) => {
  const id = parseInt(req.params.id);
  const termIndex = glossary.findIndex(t => t.id === id);

  if (termIndex === -1) return res.status(404).json({ error: 'Термин не найден' });

  const { term, definition, related_terms, sources } = req.body;

  glossary[termIndex] = {
    id,
    term: term || glossary[termIndex].term,
    definition: definition || glossary[termIndex].definition,
    related_terms: related_terms || glossary[termIndex].related_terms,
    sources: sources || glossary[termIndex].sources,
  };

  res.json(glossary[termIndex]);
};

const deleteTerm = (req, res) => {
  const id = parseInt(req.params.id);
  const termIndex = glossary.findIndex(t => t.id === id);

  if (termIndex === -1) return res.status(404).json({ error: 'Термин не найден' });

  glossary.splice(termIndex, 1);
  res.status(204).send();
};

module.exports = { getAllTerms, getTermById, addTerm, updateTerm, deleteTerm };
