import { ShoppingList } from "./shoppingList.interface";
export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    usertype: string;
    shoppingList: ShoppingList;
  }
  