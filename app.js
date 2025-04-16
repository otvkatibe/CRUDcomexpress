const express = require('express');
const cors = require('cors');
const app = express();

// Configurações
app.use(cors());
app.use(express.json());

// Rotas
const exemploRouter = require('./src/routes/exemploRoutes');
app.use('/api', exemploRouter);

// Iniciar servidor localmente
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}

module.exports = app;