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

    public UserExists(username: string, password: string): boolean {
        let toReturn: boolean = false;

        this.users.forEach((user: User): void => {
            if (user.GetUsername() == username && user.GetPassword() == password) {
                toReturn = true;
            }
        })
        return toReturn;
    }
}