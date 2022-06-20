import { loadPackages } from "./socket.js";
import {onHandleSubmit} from "./ui.js";

loadPackages();

const packageForm = document.querySelector('#packageDeliveryForm')

packageForm.addEventListener('submit', onHandleSubmit)