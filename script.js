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
        <p> ${balance.toLocaleString('pt-br',{
            style: 'currency',
            currency:'BRL'
        })} </p>
    `

        document.querySelector('.saldo-usuario').innerHTML += balanceDisplayedOnScreen
    }
}

updatingAccountBalance(userBalance)

/* Dark mode and Light Mode */

let darkMode = document.getElementById('darkMode')
let lightMode = document.getElementById('lightMode')

let pageBody = document.body

function styleDarkMode(body){
    lightMode.style.display = 'block'
    darkMode.style.display = 'none'

    body.style.background = `#1C1C1C`
}

function styleLightMode(body){
    darkMode.style.display = 'block'
    lightMode.style.display = 'none'

    body.style.background = `white`
}

darkMode.addEventListener('click', () => {
    styleDarkMode(pageBody)
})

lightMode.addEventListener('click', () => {
    styleLightMode(pageBody)
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

let expenseList = []

function addingExpenseToList(balance) {
    let descriptionOfExpense = document.getElementById('descriptionExpense').value
    let expenseAmount = parseFloat(document.getElementById('expenseValue').value)

    let expenseElement = `
    <tr id="information">
        <td class='coluna-descricao'> ${descriptionOfExpense} </td>
        <td class='coluna-categoria'>Despesa</td>
        <td class='coluna-valor cor-valor-despesa'> - ${expenseAmount.toLocaleString('pt-br',{
            style: 'currency',
            currency:'BRL'
        })} </td>
    </tr>
  `

    let objectExpense = {
        balance,
        descriptionOfExpense,
        expenseAmount
    }

    let updatedBalanceWithExpense = balance - objectExpense.expenseAmount

    let showingUpdatedBalanceWithExpense = `
        <p> R$ ${updatedBalanceWithExpense} </p>
    `

    if (isNaN(objectExpense.expenseAmount)) {
        alert('Digite apenas números neste campo')
    } else {
        document.getElementById('lista-transacoes-conteudo').innerHTML += expenseElement
        expenseList.push(objectExpense)

        console.log(expenseList)
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

let incomeList = []

function addingRevenueToList(balance) {
    let incomeDescription = document.getElementById('descriptionWin').value
    let valueRevenue = parseFloat(document.getElementById('winValue').value.replace(',', '.'))

    let revenueElement = `
    <tr id="information">
        <td class='coluna-descricao'> ${incomeDescription} </td>
        <td class='coluna-categoria'>Receita</td>
        <td class='coluna-valor cor-valor-receita'>+ ${valueRevenue.toLocaleString('pt-br',{
            style: 'currency',
            currency:'BRL'
        })} </td>
    </tr>
  `

    let objectIncome = {
        balance,
        incomeDescription,
        valueRevenue
    }

    let updatedBalanceWithRevenue = balance - objectIncome.valueRevenue

    let showingUpdatedBalanceWithRevenue = `
        <p> R$ ${updatedBalanceWithRevenue} </p>
    `

    if (isNaN(objectIncome.valueRevenue)) {
        alert('Digite apenas números neste campo')
    } else {
        document.getElementById('lista-transacoes-conteudo').innerHTML += revenueElement
        incomeList.push(objectIncome)

        console.log(incomeList)
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
