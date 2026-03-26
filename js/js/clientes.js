fetch ("/clientes")
.then(function(res){
   return res.json();
})
 .then (function(clientes){
     const tabela = document.getElementById ("tabela-clientes");
      clientes.forEach (function(cliente){
 
        const linha = document.createElement ("tr");

        linha.innerHTML=`     
            <td>${cliente.id}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.telefone}</td>
            <td>${cliente.email}</td>
            <td>${cliente.endereco}</td>
             <td>
            <button onclick="editarCliente(${cliente.id})">EDITAR</button>
            <button onclick= "excluirCliente(${cliente.id})">EXCLUIR</button>
            </td>
        `;
         tabela.appendChild(linha);

      });
    });
     
  function excluirCliente(id){
     fetch("/cliente/" + id,{
    method: "DELETE"
        })

    .then(function(){
       location.reload();

    });
        
     };

     function editarCliente(id){
     window.location.href="/editar.html?id="+id;

     }

   

   