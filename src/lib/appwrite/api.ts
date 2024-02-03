import { ID, Query } from "appwrite";
import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";
import { log } from "console";

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

export async function signInAccount(user: {email: string; password: string;}){
    try{
        const session = await account.createEmailSession(user.email, user.password);

        return session; 
    } catch(error){
        console.log(error);
        
    }
}

export async function getCurrentUser(){
    try{
        const currentAccount = await account.get();

        if(!currectAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId',currentAccount.$id)]
        )

    } catch (error){
        console.log(error);
    }
}