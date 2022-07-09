let botaoDespesa = document.getElementById('botao-despesa')
let botaoReceita = document.getElementById('botao-receita')

botaoDespesa.addEventListener('click', () => {
    prompt('Qual a sua despesa?')
})

botaoReceita.addEventListener('click', () => {
    prompt('Qual a sua receita?')
})