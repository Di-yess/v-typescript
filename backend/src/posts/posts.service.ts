import { HttpException, HttpStatus, Injectable, Req } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { IUserRequest } from 'src/types/user';
import { UpdatePostDto } from './dto/uodate-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPosts(req: IUserRequest) {
    const { id } = req.user;
    try {
      const posts = await this.prisma.post.findMany({ where: { userId: id } });
      return { posts } || { posts: [] };
    } catch (err) {
      throw err;
    }
  }

  async getPostById(id: string, req: IUserRequest) {
    const userId = req.user.id;

    try {
      const post = await this.prisma.post.findFirst({
        where: { id: Number(id), userId },
      });

      if (!post) {
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
      } else {
        return post;
      }
    } catch (err) {
      throw err;
    }
  }

  async createPost(post: CreatePostDto, @Req() req: IUserRequest) {
    const { id } = req.user;
    try {
      const newPost = await this.prisma.post.create({
        data: { ...post, userId: id },
      });
      return newPost;
    } catch (err) {
      throw err;
    }
  }

  async updatePostById(postInfo: UpdatePostDto, @Req() req: IUserRequest) {
    const userId = req.user.id;
    const { id, title, description } = postInfo;
    try {
      const post = await this.prisma.post.findFirst({
        where: { id: Number(id), userId },
      });

      console.log(post);

      if (!post) {
        throw new HttpException('Invalid command', HttpStatus.FORBIDDEN);
      }

      await this.prisma.post.updateMany({
        where: { id: Number(id) },
        data: { title, description },
      });

      const updatedPost = {
        ...post,
        title,
        description,
        updatedAt: new Date(),
      };

      return updatedPost;
    } catch (err) {
      throw err;
    }
  }

  async deletePost(id: string, req: IUserRequest) {
    const userId = req.user.id;
    try {
      const post = await this.prisma.post.findFirst({
        where: { userId, id: Number(id) },
      });

      if (!post)
        throw new HttpException('Invalid command', HttpStatus.FORBIDDEN);

      await this.prisma.post.delete({ where: { id: Number(id) } });
      return { message: 'post deleted successfully' };
    } catch (err) {
      throw err;
    }
  }
}
