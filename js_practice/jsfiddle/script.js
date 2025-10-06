const sales = [
    {item: "porridge", quantity: "3", price: 2500},
    {item: "chapatti", quantity: "12", price: 7000},
    {item: "eggs", quantity: "80", price: 40000},
    {item: "beef", quantity: "5", price: 30000},
]

function calculateTotalSales(sales){
    let total = 0

    for(i = 0; i < sales.length; i++){

        total = sales[i].quantity * sales[i].price
    }

    return Math.round(total, 2)
}

console.log(calculateTotalSales(sales))