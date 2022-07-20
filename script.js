let buttonExpense = document.getElementById('botao-despesa')
let buttonLace = document.getElementById('botao-receita')

let closeModalButton = document.getElementById('closeModal')
let closeModalEarnings = document.querySelector('.closeModalEarnings')

let addingExpense = document.getElementById('addingExpense')
let addingEarnings = document.getElementById('addingWin')

let balanceId = document.getElementById('balanceId')

let incomeList = []
let expenseList = []

let listOfValuesOfExpense = []
let listOfValuesOfIncome = []

/* Dark mode and Light Mode */

let darkMode = document.getElementById('darkMode')
let lightMode = document.getElementById('lightMode')

let pageBody = document.body

function styleDarkMode(body) {
    lightMode.style.display = 'block'
    darkMode.style.display = 'none'

    body.style.background = `#1C1C1C`
}

function styleLightMode(body) {
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

function addingExpenseToList(balance) {
    let descriptionOfExpense = document.getElementById('descriptionExpense').value
    let expenseAmount = parseFloat(document.getElementById('expenseValue').value)

    let expenseElement = `
    <tr id="information">
        <td class='coluna-descricao'> ${descriptionOfExpense} </td>
        <td class='coluna-categoria'>Despesa</td>
        <td class='coluna-valor cor-valor-despesa'> - ${expenseAmount.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })} </td>
    </tr>
  `

    let objectExpense = {
        balance,
        category: 'Despesa',
        descriptionOfExpense,
        expenseAmount
    }

    if (isNaN(objectExpense.expenseAmount)) {
        alert('Digite apenas números neste campo')
    } else {
        document.getElementById('lista-transacoes-conteudo').innerHTML += expenseElement

        expenseList.push(objectExpense)
        listOfValuesOfExpense.push(objectExpense.expenseAmount)

    }
}

closeModalButton.addEventListener('click', () => {
    closeModal()
})

addingExpense.addEventListener('click', () => {
    addingExpenseToList(userBalance)
    closeModal()

    balanceWithExpense(userBalance)
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
        <td class='coluna-valor cor-valor-receita'>+ ${valueRevenue.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })} </td>
    </tr>
  `

    let objectIncome = {
        balance,
        category: 'Receita',
        incomeDescription,
        valueRevenue
    }

    if (isNaN(objectIncome.valueRevenue)) {
        alert('Digite apenas números neste campo')
    } else {
        document.getElementById('lista-transacoes-conteudo').innerHTML += revenueElement

        incomeList.push(objectIncome)
        listOfValuesOfIncome.push(objectIncome.valueRevenue)
    }
}

closeModalEarnings.addEventListener('click', () => {
    closeModalRevenue()
})

addingEarnings.addEventListener('click', () => {
    addingRevenueToList(userBalance)
    closeModalRevenue()

    balanceWithIncome(userBalance)
})

buttonLace.addEventListener('click', () => {
    openModalRevenue()
})

/* Atualizando o saldo do usuário */

let userBalance = parseFloat(prompt('Qual seu saldo atual?'))

function updatingAccountBalance(balance) {

    if (isNaN(balance)) {
        alert('Digite apenas números neste campo!')
    } else {

        balanceId.innerText = balance.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
    }
}

updatingAccountBalance(userBalance)

/* Updtating Balance */

function balanceWithIncome(balance){
    let balanceSum = balance + (listOfValuesOfIncome[listOfValuesOfIncome.length - 1])

    balanceId.innerText = balanceSum.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
}

function balanceWithExpense(balance){
    let subtractBalance = balance - (listOfValuesOfExpense[listOfValuesOfExpense.length - 1])

    balanceId.innerText = subtractBalance.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
}