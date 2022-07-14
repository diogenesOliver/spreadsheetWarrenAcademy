let botaoDespesa = document.getElementById('botao-despesa')
let botaoReceita = document.getElementById('botao-receita')

let closeModalButton = document.getElementById('closeModal')
let closeModalEarnings = document.querySelector('.closeModalEarnings')

let addingExpense = document.getElementById('addingExpense')
let addingEarnings = document.getElementById('addingWin')

/* Saldo na conta */

let saldoDoUsuario = parseFloat(prompt('Qual seu saldo atual?'))

function updatingAccountBalance(balance) {

    if (isNaN(balance)) {
        alert('Digite apenas números neste campo!')
    } else {
        let mostrandoSaldoNaTela = `
        <p> R$ ${balance} </p>
    `

        document.querySelector('.saldo-usuario').innerHTML += mostrandoSaldoNaTela
    }
}

updatingAccountBalance(saldoDoUsuario)

/* Dark mode and Light Mode */

let darkMode = document.getElementById('darkMode')
let lightMode = document.getElementById('lightMode')

/* function darkMode(){}
function lightMode(){} */

darkMode.addEventListener('click', () => {
    lightMode.style.display = 'block'
    darkMode.style.display = 'none'
})

lightMode.addEventListener('click', () => {
    darkMode.style.display = 'block'
    lightMode.style.display = 'none'
})

/* Despesas - Modal*/

function closeModal() {
    let modalExpense = document.querySelector('.modal')
    modalExpense.style.display = 'none'
}

function openModal() {
    let modalExpense = document.querySelector('.modal')
    modalExpense.style.display = 'flex'
}

function addingExpenseToList(balance) {
    let descricaoDaDespesa = document.getElementById('descriptionExpense').value
    let valorDaDespesa = parseFloat(document.getElementById('expenseValue').value.replace(',', '.'))

    let expenseElement = `
    <tr id="information">
        <td class='coluna-descricao'> ${descricaoDaDespesa} </td>
        <td class='coluna-categoria'>Despesa</td>
        <td class='coluna-valor cor-valor-despesa'> - R$ ${valorDaDespesa} </td>
    </tr>
  `

    let listaDeDespesas = []

    let informacoesDaDespesa = {
        descricaoDaDespesa,
        valorDaDespesa,
        balance
    }

    if (isNaN(informacoesDaDespesa.valorDaDespesa)) {
        alert('Digite apenas númeos neste campo')
    } else {
        document.getElementById('lista-transacoes-conteudo').innerHTML += expenseElement

        listaDeDespesas.push(informacoesDaDespesa)
        console.log(listaDeDespesas)
    }
}


closeModalButton.addEventListener('click', () => {
    closeModal()
})

addingExpense.addEventListener('click', () => {

    addingExpenseToList(saldoDoUsuario)
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

function addingRevenueToList(balance) {
    let descriptionRevenue = document.getElementById('descriptionWin').value
    let valueRevenue = parseFloat(document.getElementById('winValue').value.replace(',', '.'))

    let revenueElement = `
    <tr id="information">
        <td class='coluna-descricao'> ${descriptionRevenue} </td>
        <td class='coluna-categoria'>Receita</td>
        <td class='coluna-valor cor-valor-receita'>+ R$ ${valueRevenue} </td>
    </tr>
  `

    let listaDeReceita = []

    let informacoesDaReceita = {
        descriptionRevenue,
        valueRevenue,
        balance
    }


    if (isNaN(informacoesDaReceita.valueRevenue)) {
        alert('Digite apenas númeos neste campo')
    } else {
        document.getElementById('lista-transacoes-conteudo').innerHTML += revenueElement

        listaDeReceita.push(informacoesDaReceita)
        console.log(listaDeReceita)
    }
}

closeModalEarnings.addEventListener('click', () => {
    closeModalRevenue()
})

addingEarnings.addEventListener('click', () => {
    addingRevenueToList(saldoDoUsuario)
    closeModalRevenue()
})

botaoReceita.addEventListener('click', () => {
    openModalRevenue()
})
