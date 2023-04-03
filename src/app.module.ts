import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://C5p69YHr:H7Ym9L68@localhost:27017/dev'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
       driver: ApolloDriver,
       playground: true,
       autoSchemaFile: "./schema.gql",
       sortSchema: true,
       autoTransformHttpErrors: true,
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
