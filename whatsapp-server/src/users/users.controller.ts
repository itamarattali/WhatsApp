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
    findByUsername(@Param('username') username: string, @Param('password') password): boolean {
        return this.userService.UserExists(username, password);
    }

    @Post('/add')
    addNewUser(@Body() body): void {
        console.log(123);
        this.userService.AddUser(body);
    }
}