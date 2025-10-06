// const storeInventory = [
//   { name: "Notebook", quantity: 15, price: 2.50 },
//   { name: "Pen", quantity: 50, price: 1.20 },
//   { name: "Eraser", quantity: 30, price: 0.80 },
//   { name: "Ruler", quantity: 20, price: 1.50 }
// ];

// function calculateInventoryValue(storeInventory){
//     let total = 0

//     for(i = 0; i < storeInventory.length; i++){

//         total += storeInventory[i].quantity * storeInventory[i].price

//     }

//     return total

// }

// console.log(calculateInventoryValue(storeInventory))



// function mostExpensiveItem(storeInventory){
//     let maxPrice = 0
//     let expensiveItem = ""

//     for ( i = 0; i < storeInventory.length; i++ ){

//         if(storeInventory[i].price > maxPrice){
//             maxPrice = storeInventory[i].price;
//             expensiveItem = maxPrice
//         }
//     }

//     return expensiveItem
// }

// console.log(mostExpensiveItem(storeInventory))


// const customerOrder = [
//     {item: "beef", quantity: 20 , price: 2000},
//     {item: "fish", quantity: 10 , price: 5000},
//     {item: "liver", quantity: 5 , price: 9000},
//     {item: "pork", quantity: 10 , price: 12000}
// ]

// function generateReceipt(customerOrder){
//     let total = 0
//     let perItem = 0

//     for (i = 0; i < customerOrder.length; i++){

//         perItem = customerOrder[i].quantity * customerOrder[i].price
//         console.log(` ${customerOrder[i].item.toUpperCase()}: ${perItem}`)

//         total += customerOrder[i].quantity * customerOrder[i].price
//     }

//     return total

// }

// console.log(`TOTAL COST: ${generateReceipt(customerOrder)}`)


// const passwords = ["Password123", "PaSsWoRd901", "clint419124"]

// const passwords = prompt(`Please enter your password: `)

// function validatePasswords(passwords){

//     const regex = /^[a-zA-Z0-9]{8,20}$/;

//     for( i = 0; i < passwords.length; i++){
//         if(regex.test(passwords)){
//             console.log(`This password is valid`)
//         }else{
//             console.log(`This password is invalid`)
//         }
//     }
// }

// validatePasswords(passwords)


const items = [
    {product: "Cement", stock: 1000},
    {product: "Glass", stock: 0},
    {product: "Bricks", stock: 5000},
    {product: "Steel", stock: 500},
    {product: "Food", stock: 0}
]

function checkStockLevels(items){

    for ( let i = 0; i < items.length; i++){
        if(items[i].stock === 0){
            console.log(`${items[i].product} IS OUT OF STOCK`)
        }else{
            console.log(`${items[i].product} IS IN STOCK`)
        }
    }
}

checkStockLevels(items)
