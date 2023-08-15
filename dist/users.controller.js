"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const authorization_decorator_1 = require("./decorators/authorization.decorator");
const get_user_by_token_response_dto_1 = require("./interfaces/user/dto/get-user-by-token-response.dto");
const create_user_dto_1 = require("./interfaces/user/dto/create-user.dto");
const create_user_response_dto_1 = require("./interfaces/user/dto/create-user-response.dto");
const login_user_dto_1 = require("./interfaces/user/dto/login-user.dto");
const login_user_response_dto_1 = require("./interfaces/user/dto/login-user-response.dto");
const user_service_1 = require("./services/user.service");
let UsersController = class UsersController {
    constructor(userServiceClient, tokenServiceClient, authUserService) {
        this.userServiceClient = userServiceClient;
        this.tokenServiceClient = tokenServiceClient;
        this.authUserService = authUserService;
    }
    async getUserByToken(request) {
        const userInfo = request.user;
        const userResponse = await (0, rxjs_1.firstValueFrom)(this.userServiceClient.send('user_get_by_id', userInfo.id));
        return {
            message: userResponse.message,
            data: {
                user: userResponse.user,
            },
            errors: null,
        };
    }
    async createUser(userRequest) {
        const createUserResponse = await (0, rxjs_1.firstValueFrom)(this.userServiceClient.send('user_create', userRequest));
        if (createUserResponse.status !== common_1.HttpStatus.CREATED) {
            throw new common_1.HttpException({
                message: createUserResponse.message,
                data: null,
                errors: createUserResponse.errors,
            }, createUserResponse.status);
        }
        return {
            message: createUserResponse.message,
            data: {
                user: createUserResponse.user,
                token: '',
            },
            errors: null,
        };
    }
    async loginUser(loginRequest) {
        const getUserResponse = await (0, rxjs_1.firstValueFrom)(this.userServiceClient.send('user_search_by_credentials', loginRequest));
        console.log(getUserResponse);
        if (getUserResponse.status !== common_1.HttpStatus.OK) {
            throw new common_1.HttpException({
                message: getUserResponse.message,
                data: null,
                errors: null,
            }, common_1.HttpStatus.UNAUTHORIZED);
        }
        const createTokenResponse = await (0, rxjs_1.firstValueFrom)(this.tokenServiceClient.send('token_create', {
            userId: getUserResponse.user.id,
        }));
        return {
            message: createTokenResponse.message,
            data: {
                token: createTokenResponse.token,
            },
            errors: null,
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiOkResponse)({
        type: get_user_by_token_response_dto_1.GetUserByTokenResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserByToken", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({
        type: create_user_response_dto_1.CreateUserResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, swagger_1.ApiCreatedResponse)({
        type: login_user_response_dto_1.LoginUserResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "loginUser", null);
UsersController = __decorate([
    (0, swagger_1.ApiBearerAuth)('authorization'),
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('users'),
    __param(0, (0, common_1.Inject)('USER_SERVICE')),
    __param(1, (0, common_1.Inject)('TOKEN_SERVICE')),
    __param(2, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy,
        user_service_1.GrpcService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map