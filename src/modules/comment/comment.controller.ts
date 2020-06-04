import { Controller, Post, Body } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
    constructor(
        private readonly _commentService: CommentService
    ){}

    @Post()
    postMessage(
        @Body('comment') comment: string
    ){
        const score = this._commentService.analizeComment(comment);
        return score;
    }
}
