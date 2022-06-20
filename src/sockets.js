import packages from './models/package.js';
import users from './models/user.js';
import purchase from './models/purchase.js';
import notification from './models/notification.js';
import employee from './models/employee.js';

export default (io) => {
    io.on('connection', (socket) => {

        const emitPackages = async () => {
            const packs = await packages.find();
            io.emit('loadPackages', packs);
        }
        emitPackages();

        const emitPurchase = async () => {
            const purch = await purchase.find();
            io.emit('loadPurchase', purch);
        }
        emitPurchase();

        socket.on('newPurchase', data => {
               console.log(data);
            })

        socket.on('newPackages', data => {
        //const newPackage = new packages(data);
        //const savedPackage = await newPackage.save();
           console.log(data);
        })
    })
}