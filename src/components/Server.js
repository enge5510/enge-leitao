const express = require('express');
const mongoose = require('mongoose');
const app = express();
const usersRouter = require('./routes/users'); 

app.use(express.json());


const MONGODB_URI = 'mongodb+srv://engesstore:551055101Ee@cluster0.wwuirmf.mongodb.net/';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB', err);
});

app.use('/api', usersRouter); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
