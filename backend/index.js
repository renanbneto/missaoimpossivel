const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const mongodb = require("mongodb");
const conurl = "mongodb+srv://aula-back:aula123456@turma-agosto.mam4s.mongodb.net/";
const conexao = new mongodb.MongoClient(conurl);


app.post("/cadastro-tarefa", function(req, res){
    res.send("ok");
});

app.get("/listar-tarefas", async function(req, res){
    
    const mongo = await conexao.connect();
    const col = mongo.db("renan").collection("tarefas");

    const dados = await col.find({}).toArray();

    res.json(dados);
});

app.get("/ler-tarefa", async function(req, res){
    const mongo = await conexao.connect();
    const col = mongo.db("renan").collection("tarefas");
    const id = new ObjectId('')
    const tarefa = await col.findOne({
        
    })
})

app.listen(3003, function(){
    console.log("Servidor iniciado");
});