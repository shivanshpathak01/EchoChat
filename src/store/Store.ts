type UserId = string;

export interface Chat{
    userId:UserId;
    name:string;
    message:string;
    upvotes:string[]; // will contain who has upvoted what 
}

export abstract class Store{
    constructor(){

    }
    initRoom(){

    }
    getChats(room : string, limit: number,offset:number){

    }
    addChat(room : string, limit:number,offset:number){

    }
    upvote(room:string, chatId:string){

    }
}