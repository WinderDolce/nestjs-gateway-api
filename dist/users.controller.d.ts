import { ClientProxy } from '@nestjs/microservices';
import { IAuthorizedRequest } from './interfaces/common/authorized-request.interface';
import { GetUserByTokenResponseDto } from './interfaces/user/dto/get-user-by-token-response.dto';
import { CreateUserDto } from './interfaces/user/dto/create-user.dto';
import { CreateUserResponseDto } from './interfaces/user/dto/create-user-response.dto';
import { LoginUserDto } from './interfaces/user/dto/login-user.dto';
import { LoginUserResponseDto } from './interfaces/user/dto/login-user-response.dto';
import { GrpcService } from './services/user.service';
export declare class UsersController {
    private readonly userServiceClient;
    private readonly tokenServiceClient;
    private readonly authUserService;
    constructor(userServiceClient: ClientProxy, tokenServiceClient: ClientProxy, authUserService: GrpcService);
    getUserByToken(request: IAuthorizedRequest): Promise<GetUserByTokenResponseDto>;
    createUser(userRequest: CreateUserDto): Promise<CreateUserResponseDto>;
    loginUser(loginRequest: LoginUserDto): Promise<LoginUserResponseDto>;
}
