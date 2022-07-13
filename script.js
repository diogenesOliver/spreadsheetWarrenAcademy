let botaoDespesa = document.getElementById('botao-despesa')
let botaoReceita = document.getElementById('botao-receita')

let closeModalButton = document.getElementById('closeModal')

let addingExpense = document.getElementById('addingExpense')

let addingEarnings = document.getElementById('addingWin')
let closeModalEarnings = document.querySelector('.closeModalEarnings')

let expenseList = []
let revenueList = []

/* Despesas */

function closeModal(){
    let modalExpense = document.querySelector('.modal')

    modalExpense.style.display = 'none'
}

closeModalButton.addEventListener('click', () => {
    closeModal()
})

addingExpense.addEventListener('click', () => {

    let descriptionExpense = document.getElementById('descriptionExpense').value
    let expenseValue = document.getElementById('expenseValue').value

    document.getElementById('description').innerHTML = descriptionExpense
    document.getElementById('value').innerHTML = expenseValue

    expenseList.push(descriptionExpense, expenseValue)
    console.log(expenseList)

    closeModal()

})

botaoDespesa.addEventListener('click', () => {
    let modalExpense = document.querySelector('.modal')

    modalExpense.style.display = 'flex'
})

/* Receita */
function closeModalReceita(){
    let modalExpense = document.querySelector('.modal-receita') 

    modalExpense.style.display = 'none'
}

closeModalEarnings.addEventListener('click', () => {
    closeModalReceita()
})

addingEarnings.addEventListener('click', () => {
    let descriptionWin = document.getElementById('descriptionWin').value
    let winValue = document.getElementById('winValue').value

    document.getElementById('description').innerHTML = descriptionWin
    document.getElementById('value').innerHTML = winValue

    expenseList.push(descriptionWin, winValue)
    console.log(revenueList)

    closeModalReceita()
})

botaoReceita.addEventListener('click', () => {
    let modalExpense = document.querySelector('.modal-receita')

    modalExpense.style.display = 'flex'
})

/* Teste */