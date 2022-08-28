import { Controller, Get, Post, Body,  Param} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService

    constructor(){
        // dont do this on real app
        // use dependeccy injection
        this.messagesService = new MessagesService()
    }

    @Get()
    listMessage(){
        return this.messagesService.findAll()
    }
    @Post()
    createMessage(@Body() body: CreateMessageDto){
        return this.messagesService.create(body.content)
    }
    @Get('/:id')
    getMessage(@Param('id') id:string){
        return this.messagesService.findOne(id)
    }
}
