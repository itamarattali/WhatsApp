import { User } from "./user";

export class UsersService {
    private users: User[] = [
        {"username": "atitamar", "password": "12345"},
        {"username": "coemanuel", "password": "54321"},
        {"username": "brigal", "password": "67890"},
        {"username": "haosher", "password": "09876"},
        {"username": "isyarin", "password": "11111"},
    ];

    public GetAllUsers(): User[] {
        return this.users;
    }

    public AddUser(user: User): void {
        this.users.push(user);
    }

    public UserExists(username: string, password: string): boolean {
        let toReturn: boolean = false;

        this.users.forEach((user: User): void => {
            if (user.username == username && user.password == password) {
                toReturn = true;
            }
        })
        return toReturn;
    }
}