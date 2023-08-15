import { IUser } from '../user.interface';
export declare class CreateUserResponseDto {
    message: string;
    data: {
        user: IUser;
        token: string;
    };
    errors: {
        [key: string]: any;
    };
}
