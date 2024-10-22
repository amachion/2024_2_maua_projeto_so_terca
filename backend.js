const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(cors())

const Filme = mongoose.model ("Filme", mongoose.Schema({
    titulo: {type: String},
    sinopse: {type: String}
}))

async function conectarAoMongo() {
    await mongoose.connect(`mongodb+srv://pro_mac:mongo123@cluster0.skf8n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
}

//get: http://localhost:3000/filmes
app.get('/filmes', async (req, res) => {
    const filmes = await Filme.find()
    res.json(filmes)
})

app.post('/filmes', async (req, res) => {
    //pegar os dados enviados na requisição
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    //instanciar um objeto de acordo com o modelo criado
    const filme = new Filme({titulo: titulo, sinopse: sinopse})
    await filme.save()
    const filmes = await Filme.find()
    res.json(filmes)
})

app.listen (3000, () => {
    try {
        conectarAoMongo()
        console.log ("server up and running and connection ok")
    }
    catch (e) {
        console.log ('Erro de conexão', e)
    }
})
