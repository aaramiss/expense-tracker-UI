//just for test 
const addBtn = document.querySelector('#transaction');

const userInfo = {
    name : 'samira',
    outgo : 0, 
    income : 0
}

let addIncome = function(user, income) {
    user.income += income
}

let addOutgo = function(user, outgo) {
    user.outgo += outgo
}

let getAccountData = function(user) {
    let balance = user.income - user.outgo
    return `Acount is: ${user.name} - Balance is: ${balance}`
}
addIncome(userInfo, 25)
addOutgo(userInfo,233)
addIncome(userInfo,277)
addOutgo(userInfo, 44)
addIncome(userInfo, 2000)


console.log(getAccountData(userInfo))