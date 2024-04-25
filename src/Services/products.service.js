import { collection, query, where, onSnapshot, getDoc, getDocs } from "firebase/firestore";
import { db } from "../Configurations/FirbaseConfiguration/firebase.config";
import { productEntity } from "../lib/productEntities";

export const getAllProducts = async () => {
    const q = collection(db, productEntity);

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log("doc ==>", doc.data());
    });
}