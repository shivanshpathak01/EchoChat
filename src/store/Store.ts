export type UserId = string;

export interface Chat{
    userId:UserId;
    name:string;
    message:string;
    upvotes:string[]; // will contain who has upvoted what 
}

export abstract class Store{
    constructor(){

    }
    initRoom(roomId:string){

    }
    getChats(room : string, limit: number,offset:number){

    }
    addChat(userId:UserId,room : string, limit:number,offset:number){

    }
    upvote(userId:UserId,room:string, chatId:string){

    }
}