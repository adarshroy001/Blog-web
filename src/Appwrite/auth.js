import conf from "../conf/conf";
import { Client, Account , ID} from 'appwrite';
export class AuthService {
    client = new Client() ; 
    account ;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId) ;  
        this.account = new Account(this.client) ; 
    } ; 

async createAccount ({email,password,name}){
    try {
       const userAccount =  await this.account.create(ID.unique() , email,password,name)
       if (userAccount) {
        //will be calling login directly ;
        return this.login({email,password}) ;
       } else {
        return userAccount ; 
       }
    } catch (error) {
        throw error ;
    }

}
async login ({email,password}){
    try {
      return await this.account.createEmailPasswordSession(email,password)
    } catch (error) {
        throw error ;
    }

}
async getCurrentUser (){
    try {
        return  await this.account.get() ; 
     } catch (error) {
        if (error.code === 401) {
            console.log("User is not authenticated");
            return null; // Return null or handle the error as needed
        }
        throw error; 
    }
}
async logout(){
    try {
      await this.account.deleteSession('current')
    } catch (error) {
        throw error ; 
    }
}
 

} ; 
const authService =  new AuthService () ;  

export default authService ; 