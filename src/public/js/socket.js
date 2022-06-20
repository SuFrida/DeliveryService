const socket = io()

export const loadPackages = () => {
    socket.on('loadPackages', (data) => {
        console.log(data)
    })
}

export const savePackages = () => {
    socket.emit('newPackage', {
        id_package,
        id_product
    })
}