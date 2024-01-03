import { ID } from "appwrite";
import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";

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
        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            email: newAccount.email,
            name: newAccount.name,
            username: user.username, // we are not passing it in newAccount
            imageUrl: avatarUrl,
        })

        return newUser;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function saveUserToDB(user: {
    //accept values and destructured below
    accountId: string;
    email: string;
    name: string;
    imageUrl: URL;
    username?: string;
}){
    try{
        const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        user,
    )}
    catch (error){
        console.log(error);
    }
}