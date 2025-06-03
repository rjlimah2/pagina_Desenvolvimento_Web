//Método 'queryselector' que retorna objeto 'button, limpar' Estânciado
const botao_limpar = document.querySelector("button#bt_limpar");

//Função que faz aparecer uma mensagem quando clicar no botão
botao_limpar.addEventListener("click", function() {
    alert("Formulário limpo!")
});
