let botaoDespesa = document.getElementById('botao-despesa')
let botaoReceita = document.getElementById('botao-receita')

let expenseList = []
let revenueList = []

botaoDespesa.addEventListener('click', () => {

    let descriptionExpense = document.getElementById('descriptionExpense').value
    let expenseValue = document.getElementById('expenseValue').value

    document.getElementById('value').innerHTML = descriptionExpense
    document.getElementById('description').innerHTML = expenseValue

    expenseList.push(descriptionExpense, expenseValue)
    console.log(expenseList)

})