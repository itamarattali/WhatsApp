import { User } from "./user";

export class UsersService {
    private users: User[] = [
        new User('atitamar', '12345'),
        new User('coemanuel', '54321'),
        new User('brigal', '67890'),
        new User('haosher', '09876'),
        new User('isyarin', '11111'),
    ];

    // TODO refactor without prewritten users
    private nextUserId = 5;

    public GetAllUsers(): User[] {
        return this.users;
    }

    public AddUser(username: string, password: string): void {
        this.users.push(new User(username, password));
    }

    public GetByUsername(username: string): User {
        const user: User = this.usernameExists(username);
        console.log(user);
        return user;
    }

    private usernameExists(username: string): User {
        let foundUser: User = null;
        this.users.forEach((user: User): void => {
            if (user.GetUsername() === username) {
                foundUser = user;
            }
        })
        return foundUser;
    }
}