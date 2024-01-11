import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompletitionsModule } from './completitions/completitions.module';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { GithubModule } from './github/github.module';
import { ProjectsModule } from './projects/projects.module';
import { ContainersModule } from './containers/containers.module';

@Module({
  imports: [CompletitionsModule, ConfigModule.forRoot(), ContainersModule, ProjectsModule, GithubModule],
  controllers: [AppController],
  providers: [AppService, UserService, PostService, PrismaService],
})
export class AppModule {}
