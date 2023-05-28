import { PrismaService } from './../prisma/prisma.service';
import { Module, forwardRef } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [PostsService, PrismaService],
  controllers: [PostsController],
  exports: [PostsService],
  imports: [forwardRef(() => AuthModule)],
})
export class PostsModule {}
