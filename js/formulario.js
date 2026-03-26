
form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = form.nome.value;
    const telefone = form.telefone.value;
    const email = form.email.value;
    const endereco = form.endereco.value;

    try {
        const response = await fetch('/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, telefone, email, endereco })
        });

        const data = await response.text();
        mensagem.textContent = data;
        form.reset();
    } catch (erro) {
        console.error('Erro ao cadastrar:', erro);
        mensagem.textContent = 'Erro ao cadastrar cliente';
    }
});

