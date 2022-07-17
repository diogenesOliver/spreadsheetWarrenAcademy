let buttonExpense = document.getElementById('botao-despesa')
let buttonLace = document.getElementById('botao-receita')

let closeModalButton = document.getElementById('closeModal')
let closeModalEarnings = document.querySelector('.closeModalEarnings')

let addingExpense = document.getElementById('addingExpense')
let addingEarnings = document.getElementById('addingWin')

/* Saldo na conta */

let userBalance = parseFloat(prompt('Qual seu saldo atual?'))

function updatingAccountBalance(balance) {

    if (isNaN(balance)) {
        alert('Digite apenas números neste campo!')
    } else {
        let balanceDisplayedOnScreen = `
        <p> R$ ${balance} </p>
    `

        document.querySelector('.saldo-usuario').innerHTML += balanceDisplayedOnScreen
    }
}

updatingAccountBalance(userBalance)

/* Dark mode and Light Mode */

let darkMode = document.getElementById('darkMode')
let lightMode = document.getElementById('lightMode')

function styleDarkMode(){
    lightMode.style.display = 'block'
    darkMode.style.display = 'none'

    let body = document.body

    body.style.background = `#1C1C1C`
}

function styleLightMode(){
    darkMode.style.display = 'block'
    lightMode.style.display = 'none'

    let body = document.body

    body.style.background = `white`
}

darkMode.addEventListener('click', () => {
    styleDarkMode()
})

lightMode.addEventListener('click', () => {
    styleLightMode()
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
    let descriptionOfExpense = document.getElementById('descriptionExpense').value
    let expenseAmount = parseFloat(document.getElementById('expenseValue').value.replace(',', '.'))

    let expenseElement = `
    <tr id="information">
        <td class='coluna-descricao'> ${descriptionOfExpense} </td>
        <td class='coluna-categoria'>Despesa</td>
        <td class='coluna-valor cor-valor-despesa'> - R$ ${expenseAmount} </td>
    </tr>
  `

    let expenseInformation = [
        balance,
        {
            descriptionOfExpense,
            expenseAmount
        }
    ]


    if (isNaN(expenseInformation[1].expenseAmount)) {
        alert('Digite apenas númeos neste campo')
    } else {
        document.getElementById('lista-transacoes-conteudo').innerHTML += expenseElement

        console.log(expenseInformation)
    }
}


closeModalButton.addEventListener('click', () => {
    closeModal()
})

addingExpense.addEventListener('click', () => {
    addingExpenseToList(userBalance)
    closeModal()
})

buttonExpense.addEventListener('click', () => {
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
    let incomeDescription = document.getElementById('descriptionWin').value
    let valueRevenue = parseFloat(document.getElementById('winValue').value.replace(',', '.'))

    let revenueElement = `
    <tr id="information">
        <td class='coluna-descricao'> ${incomeDescription} </td>
        <td class='coluna-categoria'>Receita</td>
        <td class='coluna-valor cor-valor-receita'>+ R$ ${valueRevenue} </td>
    </tr>
  `

    let incomeInformation = [
        balance,
        {
            incomeDescription,
            valueRevenue
        }
    ]

    if (isNaN(incomeInformation[1].valueRevenue)) {
        alert('Digite apenas númeos neste campo')
    } else {
        document.getElementById('lista-transacoes-conteudo').innerHTML += revenueElement

        console.log(incomeInformation)
    }
}

closeModalEarnings.addEventListener('click', () => {
    closeModalRevenue()
})

addingEarnings.addEventListener('click', () => {
    addingRevenueToList(userBalance)
    closeModalRevenue()
})

buttonLace.addEventListener('click', () => {
    openModalRevenue()
})
