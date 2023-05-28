import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { IUserRequest } from 'src/types/user';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/uodate-post.dto';
import { PostsService } from './posts.service';

@UseGuards(JwtAuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getAllPosts(@Req() req: IUserRequest) {
    return this.postsService.getAllPosts(req);
  }

  @Get(':id')
  getPostById(@Param('id') id: string, req: IUserRequest) {
    return this.postsService.getPostById(id, req);
  }

  @Post()
  createPost(@Body() postDto: CreatePostDto, @Req() req: IUserRequest) {
    return this.postsService.createPost(postDto, req);
  }

  @Put()
  updatePostById(
    @Body() updatePostDto: UpdatePostDto,
    @Req() req: IUserRequest
  ) {
    return this.postsService.updatePostById(updatePostDto, req);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string, @Req() req: IUserRequest) {
    return this.postsService.deletePost(id, req);
  }
}
