const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('🚀 Hola OpenShift! App desplegada correctamente desde GitHub by Nexsys.');
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP', time: new Date() });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
