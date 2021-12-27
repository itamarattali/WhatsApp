import { Controller, Get, Param } from "@nestjs/common";
import { User } from "./user";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get('')
    findAll(): User[] {
        return this.userService.GetAllUsers();
    }

    @Get('/user/:username/:password')
    findByUsername(@Param('username') username: string, @Param('password') password): boolean {
        return this.userService.UserExists(username, password);
    }
}