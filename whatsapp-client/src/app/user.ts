export class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    public GetUsername(): string {
        return this.username;
    }

    public UpdateUsername(username: string): void {
        this.username = username;
    }

    public GetPassword(): string {
        return this.password;
    }

    public UpdatePassword(password: string): void {
        this.password = password;
    }
}