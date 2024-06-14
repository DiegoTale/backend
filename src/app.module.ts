import { Module } from '@nestjs/common';

import { UsersModule } from './app/users/users.module';
import { ClientsModule } from './app/clients/clients.module';

@Module({
  imports: [UsersModule, ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
