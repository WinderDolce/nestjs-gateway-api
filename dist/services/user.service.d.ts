import { OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
export declare class GrpcService implements OnModuleInit {
    private readonly userServiceClient;
    private authService;
    constructor(userServiceClient: ClientGrpc);
    onModuleInit(): void;
    createToken({ userId: string }: {
        userId: any;
    }): Promise<string>;
}
