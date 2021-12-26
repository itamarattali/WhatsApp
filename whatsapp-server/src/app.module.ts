import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User.ControllerController } from './users/user.controller/user.controller.controller';
import { UsersController } from './users/users/users.controller';
import { UsersService } from './users/users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController, User.ControllerController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
