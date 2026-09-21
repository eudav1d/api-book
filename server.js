const express = require('express');
const app = express()
const port = 3000

app.set('json spaces', 2); 

app.get('/', (req, res) => {
  res.send('E aí bb, tudo certo?')
})

//endpoint para rota /turma
app.get('/turma', (req, res) => {
    res.send('Bem-vindo à rota /turma!')
})

//endpoint para rota /books
app.get('/books', (req, res) => {
    res.json([
    {
        id: 1,
        title: 'O Senhor dos Anéis',
        author: 'J.R.R. Tolkiin'
    },
    {
        id: 2,
        title: 'As branquelas',
        author: ['Keenen Ivory Wayans', 'Marlon Wayans', 'Shawn Wayans']
    },
    {
        id: 3,
        title: 'Toy Story',
        author: 'John Lasseter'
    }
])
})

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if (!book) {
        return res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.json(book);
});

app.listen(port, () => {
  console.log(`API-BOOK rodando na porta ${port}`)
})