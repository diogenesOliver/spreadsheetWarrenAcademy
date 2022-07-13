let botaoDespesa = document.getElementById('botao-despesa')
let botaoReceita = document.getElementById('botao-receita')

let closeModalButton = document.getElementById('closeModal')

let addingExpense = document.getElementById('addingExpense')

let addingEarnings = document.getElementById('addingWin')
let closeModalEarnings = document.querySelector('.closeModalEarnings')


/* Despesas - Modal*/

function closeModal() {
    let modalExpense = document.querySelector('.modal')
    modalExpense.style.display = 'none'
}

function openModal() {
    let modalExpense = document.querySelector('.modal')
    modalExpense.style.display = 'flex'
}

function addingExpenseToList() {
    let descricaoDaDespesa = document.getElementById('descriptionExpense').value
    let valorDaDespesa = parseInt(document.getElementById('expenseValue').value)

    let expenseElement = `
    <tr id="information">
        <td class='coluna-descricao'> ${descricaoDaDespesa} </td>
        <td class='coluna-categoria'>Despesa</td>
        <td class='coluna-valor'>R$ ${valorDaDespesa} </td>
    </tr>
  `

    let listaDeDespesas = []

    let informacoesDaDespesa = {
        descricaoDaDespesa,
        valorDaDespesa
    }

    document.getElementById('lista-transacoes-conteudo').innerHTML += expenseElement

    listaDeDespesas.push(informacoesDaDespesa)
    console.log(listaDeDespesas)
}


closeModalButton.addEventListener('click', () => {
    closeModal()
})

addingExpense.addEventListener('click', () => {

    addingExpenseToList()
    closeModal()

})

botaoDespesa.addEventListener('click', () => {
    openModal()
})

/* Receita - Modal*/

function closeModalRevenue() {
    let modalExpense = document.querySelector('.modal-receita')
    modalExpense.style.display = 'none'
}

function openModalRevenue() {
    let modalExpense = document.querySelector('.modal-receita')
    modalExpense.style.display = 'flex'
}

function addingRevenueToList() {
    let descriptionRevenue = document.getElementById('descriptionWin').value
    let valueRevenue = parseInt(document.getElementById('winValue').value)

    let revenueElement = `
    <tr id="information">
        <td class='coluna-descricao'> ${descriptionRevenue} </td>
        <td class='coluna-categoria'>Receita</td>
        <td class='coluna-valor'>R$ ${valueRevenue} </td>
    </tr>
  `

    let listaDeReceita = []

    let informacoesDaReceita = {
        descriptionRevenue,
        valueRevenue
    }

    document.getElementById('lista-transacoes-conteudo').innerHTML += revenueElement

    listaDeReceita.push(informacoesDaReceita)
    console.log(listaDeReceita)
}

closeModalEarnings.addEventListener('click', () => {
    closeModalRevenue()
})

addingEarnings.addEventListener('click', () => {
    addingRevenueToList()
    closeModalRevenue()
})

botaoReceita.addEventListener('click', () => {
    openModalRevenue()
})
