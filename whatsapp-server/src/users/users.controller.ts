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

    @Get('/user/:username')
    findByUsername(@Param('username') username: string): User {
        return this.userService.GetByUsername(username);
    }
}