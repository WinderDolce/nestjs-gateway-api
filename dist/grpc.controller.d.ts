import { IAuthorizedRequest } from './interfaces/common/authorized-request.interface';
import { GrpcService } from './services/user.service';
export declare class GrpcController {
    private readonly authUserService;
    constructor(authUserService: GrpcService);
    createToken(request: IAuthorizedRequest): Promise<any>;
}
