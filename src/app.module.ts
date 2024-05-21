import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { QuotesModule } from './quotes/quotes.module';
import { MongooseModule } from '@nestjs/mongoose';

const db =
  'mongodb+srv://kanhaiyakseeksolution:V551GNP2XqoYDGcV@cluster0.cwurlew.mongodb.net/demo';
// process.env.DATABASE
@Module({
  imports: [MongooseModule.forRoot(db), UsersModule, QuotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
