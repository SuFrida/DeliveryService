import { savePackages } from "./socket.js";

const onHandleSubmit = (e) => {
    e.preventDefault();

    savePackages(
        packageForm['id_package'].value,
        packageForm['id_product'].value
    );
};