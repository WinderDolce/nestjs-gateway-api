import { IAuthorizedRequest } from './interfaces/common/authorized-request.interface';
import { ClientRedis } from '@nestjs/microservices';
export declare class RedisController {
    private readonly authUserService;
    constructor(authUserService: ClientRedis);
    getUser(request: IAuthorizedRequest): Promise<any>;
}
