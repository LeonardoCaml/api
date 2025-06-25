const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let user = [
    { id: 1, titulo: "matheus Soares" },
    { id: 2, titulo: "Beatriz Santos" },
    { id: 3, titulo: "Josue Almeida" }
]

app.get('/tarefa', (req, res) => {
    res.json(user)
})

app.post('/tarefa', (req, res) => {
    const novoUsuario = {
        id: user.length + 1,
        titulo: req.body.titulo
    }
    user.push(novoUsuario)
    res.status(201).json(novoUsuario)
})

app.put('/tarefa/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = user.findIndex(t => t.id === id)

    if (index === -1) {
        return res.status(404).json({ mensagem: 'Tarefa não encontrada' })
    }

    user[index].titulo = req.body.titulo
    res.json(user[index])
})

app.delete('/tarefa/:id', (req, res) => {
    const id = parseInt(req.params.id)
    user = user.filter(t => t.id !== id)
    res.status(204).send()
})

app.listen(port, () => {
    console.log("servidor rodando")
    console.log(user)
})