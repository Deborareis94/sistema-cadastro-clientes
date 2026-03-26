const express =require ("express");
const app = express();
const bodyParser= require("body-parser");
const Cliente = require("./models/Cliente");

app.use(bodyParser.urlencoded({extended: false}));
app.use (bodyParser.json ());


app.get("/",function (req,res){
    res.sendFile(__dirname +"/index.html");

});

app.post("/cadastro" ,function(req,res){
    Cliente.create({
        nome:req.body.nome,
        telefone:req.body.telefone,
        email:req.body.email,
        endereco:req.body.endereco
}).then(function(){
    res.send("Cliente cadastrado com sucesso!");
}).catch(function(erro){
    res.send("Erro ao cadastrar cliente"+ erro)
});

});

app.get('/clientes', async (req, res)=> {
    try {
        const clientes = await Cliente.findAll(); 
        res.json(clientes); 
    } catch (erro) {
        console.error("Erro ao listar clientes:", erro);
        res.status(500).send("Erro ao listar clientes");
    }
});
 






 app.delete ("/cliente/:id" , function (req,res){
        const id =req.params.id;

    Cliente.destroy ({
    where:{id: id}
  }).then (function(){
    res.send("cliente excluído");

  });

});

app.get("/cliente/:id",function(req,res){
   const id = req.params.id;
   Cliente.findByPk(id)
   .then(function(cliente){
    res.json(cliente);
 });
 });

 app.put("/cliente/:id",function(req,res){
    const id =req.params.id;
    Cliente.update (
        {
            nome:req.body.nome,
            telefone:req.body.telefone,
            email:req.body.email,
            endereco:req.body.endereco
        },
        {
             where:{id:id}

        }
    ).then(function(){
        res.send("Cliente atualizado");


    });
});
    


 

app.use(express.static(__dirname));






app.listen (3000,function(){
    console.log ("Servidor rodando...");

});



app.post("/clientes",function(req,res){
    console.log (req.body);
    res.send("Cliente cadastrado");

});






