declare enum Roles {
    ADMIN = "ADMIN",
    USER = "USER",
    DEVELOPER = "DEVELOPER"
}
export declare class UserDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Roles;
}
export {};
