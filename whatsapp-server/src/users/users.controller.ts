import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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
    findByUsernameAndPassword(@Param('username') username: string, 
    @Param('password') password): boolean {
        return this.userService.UserExists(username, password);
    }

    @Get('/user/:username')
    findByUsername(@Param('username') username: string): User {
        return this.userService.GetUserByUsername(username);
    }

    @Post('/add')
    addNewUser(@Body() body): void {
        this.userService.AddUser(body);
    }
}