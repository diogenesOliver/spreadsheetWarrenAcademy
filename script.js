let botaoDespesa = document.getElementById('botao-despesa')
let botaoReceita = document.getElementById('botao-receita')

let addingExpense = document.getElementById('addingExpense')

let expenseList = []
let revenueList = []

function closeModal(){
    let modalExpense = document.querySelector('.modal')
    modalExpense.style.display = 'none'
}

addingExpense.addEventListener('click', () => {

    let descriptionExpense = document.getElementById('descriptionExpense').value
    let expenseValue = document.getElementById('expenseValue').value

    document.getElementById('value').innerHTML = descriptionExpense
    document.getElementById('description').innerHTML = expenseValue

    expenseList.push(descriptionExpense, expenseValue)
    console.log(expenseList)

    closeModal()

})

botaoDespesa.addEventListener('click', () => {
    let modalExpense = document.querySelector('.modal')

    modalExpense.style.display = 'flex'
})