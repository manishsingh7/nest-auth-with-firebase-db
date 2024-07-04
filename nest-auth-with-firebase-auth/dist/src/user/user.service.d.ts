import { FirebaseAdmin } from '../../config/firebase.setup';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private readonly admin;
    constructor(admin: FirebaseAdmin);
    createUser(userRequest: UserDto): Promise<any>;
}
