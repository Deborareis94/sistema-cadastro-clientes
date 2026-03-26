const params = new URLSearchParams (window.location.search);
const id =params.get("id");

fetch("/cliente/" +  id)
.then(function(res){
    return res.json();
})

.then(function(cliente){
    document.getElementById("nome").value=cliente.nome;
    document.getElementById("telefone").value=cliente.telefone;
    document.getElementById("email").value=cliente.email;
    document.getElementById("endereco").value=cliente.endereco;

});

const form =document.getElementById ("form-editar")
form.addEventListener("submit",function(e){
e.preventDefault();

const dados ={
  nome:document.getElementById("nome").value,
  telefone:document.getElementById("telefone").value,
  email: document.getElementById("email").value,
  endereco:document.getElementById("endereco").value

};
fetch("/cliente/"+ id,{
    method:"PUT",
    headers:{
        "Content-type":"application/json"

    },
    body:JSON.stringify(dados)

})
.then(function(){
    alert("cliente atualizado com susesso");
    window.location.href="/clientes.html";


});


});