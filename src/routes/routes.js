const express = require('express');
const router = express.Router();
const ExemploController = require('../controllers/controller');

let dados = [];

router.get('/', (req, res) => {
  res.json(dados);
});

router.post('/', (req, res) => {
  const novoItem = req.body;
  dados.push(novoItem);
  res.status(201).json(novoItem);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const atualizacao = req.body;
  dados[id] = atualizacao;
  res.json(atualizacao);
});

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  dados[id] = { ...dados[id], ...req.body };
  res.json(dados[id]);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  dados.splice(id, 1);
  res.status(204).send();
});

module.exports = router;