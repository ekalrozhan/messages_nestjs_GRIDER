import { MessagesRepository } from "./messages.repository";

export class MessagesService{
    messageRepo: MessagesRepository
    constructor(){
        // service is creating its own dependencies
        // dont do this on real apps
        this.messageRepo = new MessagesRepository()
    }

    findOne(id:string){
        return this.messageRepo.findOne(id)
    }

    findAll(){
        return this.messageRepo.findAll()
    }

    create( content: string){
        return this.messageRepo.create(content)
    }
}