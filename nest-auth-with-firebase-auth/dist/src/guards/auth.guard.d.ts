import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { FirebaseAdmin } from "../../config/firebase.setup";
export declare class AuthGuard implements CanActivate {
    private reflector;
    private readonly admin;
    constructor(reflector: Reflector, admin: FirebaseAdmin);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
