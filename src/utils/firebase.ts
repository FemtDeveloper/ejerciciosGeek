// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase, set, ref, update, remove } from "firebase/database";
import { v4 } from "uuid";
import { FormValuesProps } from "../sections/@dashboard/user/UserNewEditForm";
import { FormValuesProps as FormProductValuesProps } from "../sections/@dashboard/e-commerce/ProductNewEditForm";
import { Invoice } from "src/@types/product";

const firebaseConfig = {
  apiKey: "AIzaSyA6cG8QFwTiRIB937Zfqnk-Pn13JetGTa4",
  authDomain: "geekstopia.firebaseapp.com",
  projectId: "geekstopia",
  storageBucket: "geekstopia.appspot.com",
  messagingSenderId: "139728970131",
  appId: "1:139728970131:web:9384795aa2b9bbf7000866",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getDatabase();

export function writeUserData(
  data: FormValuesProps,
  isEditing: boolean = false,
  id: string
) {
  console.log({ dataFromfunction: data });
  const db = getDatabase();
  if (isEditing) {
    update(ref(db, "users/" + data.id), data);
    return;
  }
  set(ref(db, "users/" + id), { ...data, status: "active", id });
}
export function writeProductData(
  data: FormProductValuesProps,
  id: string,
  isEditing?: boolean
) {
  console.log({ dataFromfunction: data });
  const db = getDatabase();
  if (isEditing) {
    update(ref(db, "products/" + data.id), data);
    return;
  }
  set(ref(db, "products/" + id), { ...data, createdAt: new Date().getTime() });
}

export const deleteUser = (id: string) => {
  remove(ref(db, "users/" + id));
};

export function uploadInvoice(data: Invoice, id: string, date: number) {
  console.log({ dataFromfunction: data });
  const db = getDatabase();
  const invoiceId = v4();

  set(ref(db, "invoices/" + id), {
    ...data,
    createdAt: new Date().getTime(),
  });
}
