const socket = io();

export const loadPackages = () => {
    socket.on('loadPackages', (data) => {
        console.log(data)
    })
}

export const savePackages = (id_package, id_product, id_purchase, product_location, final_location, id_employee) => {
    socket.emit('newPackages', {
        id_package,
        id_product,
        id_purchase,
        product_location,
        final_location,
        id_employee
    })
}

// export const loadPurchase = () => {
//     socket.on('loadPurchase', (data) => {
//         console.log(data)
//     })
// }

// export const savePurchase = (id_purchase, id_product, quantity) => {
//     socket.emit('newPurchase', {
//         id_purchase, id_product, quantity
//     })
// }