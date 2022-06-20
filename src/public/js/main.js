import { loadPackages } from "./socket.js";
import {onHandleSubmit} from "./ui.js";

loadPackages();
//loadPurchase();

const packageDeliveryForm = document.querySelector('#packageDeliveryForm');
//const purchaseForm = document.querySelector('#purchaseForm');

packageDeliveryForm.addEventListener('submit', onHandleSubmit);