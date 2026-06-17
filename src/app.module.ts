import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from 'config/typeOrm.config';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { ContactModule } from './contact/contact.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), UserModule, MessageModule, ContactModule, FirebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
