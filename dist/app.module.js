"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const users_controller_1 = require("./users.controller");
const authorization_guard_1 = require("./services/guards/authorization.guard");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const user_service_1 = require("./services/user.service");
const grpc_controller_1 = require("./grpc.controller");
const redis_controller_1 = require("./redis.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        controllers: [users_controller_1.UsersController, grpc_controller_1.GrpcController, redis_controller_1.RedisController],
        providers: [
            {
                provide: 'TOKEN_SERVICE',
                useFactory: (configService) => {
                    const tokenServiceOptions = configService.get('TOKEN_SERVICE');
                    return microservices_1.ClientProxyFactory.create(tokenServiceOptions);
                },
                inject: [config_1.ConfigService],
            },
            {
                provide: 'REDIS_SERVICE',
                useFactory: (configService) => {
                    const redisServiceOptions = configService.get('REDIS_SERVICE');
                    return microservices_1.ClientProxyFactory.create({
                        transport: redisServiceOptions.transport,
                        options: {
                            url: `redis://localhost:6379`,
                        },
                    });
                },
                inject: [config_1.ConfigService],
            },
            {
                provide: 'RMQ_SERVICE',
                useFactory: (configService) => {
                    const rmqServiceOptions = configService.get('RMQ_SERVICE');
                    return microservices_1.ClientProxyFactory.create(rmqServiceOptions);
                },
                inject: [config_1.ConfigService],
            },
            {
                provide: 'USER_SERVICE',
                useFactory: (configService) => {
                    const userServiceOptions = configService.get('USER_SERVICE');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [config_1.ConfigService],
            },
            {
                provide: 'GRPC_AUTH_SERVICE',
                useFactory: (configService) => {
                    const authServiceOptions = configService.get('AUTH_SERVICE');
                    return microservices_1.ClientProxyFactory.create({
                        options: {
                            host: `${authServiceOptions.options.host}`,
                            port: `${authServiceOptions.options.port}`,
                            package: 'auth',
                            protoPath: (0, path_1.join)(__dirname, './auth/auth.proto'),
                            loaders: {
                                enums: String,
                                objects: true,
                                arrays: true,
                            },
                        },
                        transport: authServiceOptions.transport,
                    });
                },
                inject: [config_1.ConfigService],
            },
            {
                provide: core_1.APP_GUARD,
                useClass: authorization_guard_1.AuthGuard,
            },
            {
                provide: 'GRPC_SERVICE',
                useClass: user_service_1.GrpcService,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map