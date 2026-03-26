const inputBusca= document.getElementById("buscar");
const lupa =document.querySelector(".buscar-container i")

inputBusca.addEventListener("keypress",function(e){
   if(e.key==="Enter"){
      const termo= inputBusca.value.toLowerCase();
      buscarClientes(termo);
   }
});

lupa.addEventListener("click",function(){
   var termo =inputBusca.value.toLowerCase();
   buscarClientes(termo);
});


function buscarClientes(termo) {
   fetch("/clientes")
   .then(function(res){
      return res.json ();
   })
   .then(function(clientes){
       var tabela=document.getElementById("tabela-clientes");
       tabela.innerHTML="";
     
      clientes.forEach (function(cliente){
        if(cliente.nome.toLowerCase().indexOf(termo) !== -1){
         var linha = document.createElement("tr");
          
      linha.innerHTML=`     
            <td>${cliente.id}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.telefone}</td>
            <td>${cliente.email}</td>
            <td>${cliente.endereco}</td>
             <td class="acoes">
            <button class="btn-editar"  onclick="editarCliente(${cliente.id})">EDITAR</button>
            <button class="brt-deletar" onclick= "excluirCliente(${cliente.id})"><i class= "fa-solid fa-trash"></i></button>
            </td>
        `;
         tabela.appendChild(linha);
        }
      });
    });
   }
     
  function excluirCliente(id){
     fetch("/cliente/" + id,{
    method: "DELETE"
        })

    .then(function(){
       buscarClientes(inputBusca.value.toLowerCase());
 });

  }
        
     function editarCliente(id){
     window.location.href="/editar.html?id="+id;
     }

     buscarClientes("");

  
   