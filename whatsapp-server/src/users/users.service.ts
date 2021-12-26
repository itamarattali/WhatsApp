import { User } from "./user"

export class UsersService {
    private users: User[] = [
        new User(0, 'atitamar', '12345'),
        new User(1, 'coemanuel', '54321'),
        new User(2, 'brigal', '67890'),
        new User(3, 'haosher', '09876'),
        new User(4, 'isyarin', '11111'),
    ];

    // TODO refactor without prewritten users
    private nextUserId = 5;

    public GetAllUsers(): User[] {
        return this.users;
    }

    public AddUser(username: string, password: string): void {
        this.users.push(new User(this.nextUserId++, username, password));
    }

    public GetById(id: number): User {
        return this.users[id];
    }
}