import packages from './models/package.js';

export default (io) => {
    io.on('connection', (socket) => {
        const emitPackages = async () => {
            const packages = await packages.find()
            io.emit('loadPackages', packages);
        }
        emitPackages();

        socket.on('newPackage', async (data) => {
           const newPackage = new Package(data);
           const savedPackage = await newPackage.save();
           console.log(savedPackage);
        })
    })
}