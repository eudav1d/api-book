const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//endpoint para rota /turma
app.get('/turma', (req, res) => {
    res.send('Bem-vindo à rota /turma!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})