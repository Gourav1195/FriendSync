import { ID } from "appwrite";
import { INewUser } from "@/types";
import { account } from "./config";

export async function createUserAccount(user:INewUser) {
    try {
        // create user on AUTH
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        );

        // create user on Database
        if(!newAccount) throw Error;

        return newAccount;
    } catch (error) {
        console.log(error);
        return error;
    }
}