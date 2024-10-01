//console.log('hello, NodeJs!!!')
const express = require('express')
const app = express()
app.use(express.json())

let filmes = [
    {
        titulo: "Divertidamente",
        sinopse: "Com a mudança para uma nova cidade, as emoções de Riley, que tem apenas 11 anos de idade, ficam extremamente agitadas. Uma confusão na sala de controle do seu cérebro deixa a Alegria e a Tristeza de fora, afetando a vida de Riley radicalmente."
    },
    {
        titulo: "Oppenheimer",
        sinopse: "O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica."
    }
]

//get: http://localhost:3000/oi
app.get('/oi', (req, res) => {
    res.send('oi')
})

//get: http://localhost:3000/filmes
app.get('/filmes', (req, res) => {
    res.json(filmes)
})

app.post('/filmes', (req, res) => {
    //pegar os dados enviados na requisição
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    //montar o jason do novo filme
    const novo_filme = {titulo: titulo, sinopse: sinopse}
    filmes.push(novo_filme)
    //mostrar ao usuário a base atualizada
    res.json(filmes)
})


app.listen (3000, () => console.log ("server up and running"))
