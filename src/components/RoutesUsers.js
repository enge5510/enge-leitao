const express = require('express');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

router.post('/request-verification', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).send('Usuário não encontrado.');
  }

  user.verificationToken = crypto.randomBytes(20).toString('hex');
  await user.save();

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: user.email,
    subject: 'Verificação de e-mail',
    text: `Clique no link para verificar seu e-mail: http://localhost:3000/verify-email?token=${user.verificationToken}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Erro ao enviar e-mail.');
    }
    res.status(200).send('E-mail de verificação enviado.');
  });
});

router.get('/verify-email', async (req, res) => {
  const { token } = req.query;
  const user = await User.findOne({ verificationToken: token });

  if (!user) {
    return res.status(400).send('Token de verificação inválido.');
  }

  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save();

  res.status(200).send('E-mail verificado com sucesso.');
});


router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, 'email'); // Modifique 'email' para os campos que deseja retornar
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send('Erro ao buscar usuários.');
  }
});

module.exports = router;
