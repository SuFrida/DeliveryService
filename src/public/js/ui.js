import { savePackages } from "./socket.js";
//import { savePurchase } from "./socket.js";

export const onHandleSubmit = (e) => {
    e.preventDefault();

    savePackages(
        packageDeliveryForm["id_package"].value,
        packageDeliveryForm["id_product"].value,
        packageDeliveryForm["id_purchase"].value,
        packageDeliveryForm["product_location"].value,
        packageDeliveryForm["final_location"].value,
        packageDeliveryForm["id_employee"].value
    );

    // savePurchase(
    //     purchaseForm["id_purchase"].value,
    //     purchaseForm["id_product"].value,
    //     purchaseForm["quantity"].value
    // );
};