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
exports.GrpcController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const uuid_1 = require("uuid");
const authorization_decorator_1 = require("./decorators/authorization.decorator");
const get_user_by_token_response_dto_1 = require("./interfaces/user/dto/get-user-by-token-response.dto");
const user_service_1 = require("./services/user.service");
let GrpcController = class GrpcController {
    constructor(authUserService) {
        this.authUserService = authUserService;
    }
    async createToken(request) {
        const token = await this.authUserService.createToken({ userId: (0, uuid_1.v4)() });
        return {
            message: 'successful',
            token: token,
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_user_by_token_response_dto_1.GetUserByTokenResponseDto,
    }),
    (0, swagger_1.ApiTags)('grpc'),
    (0, common_1.Get)('/grpc'),
    (0, swagger_1.ApiOkResponse)({
        type: get_user_by_token_response_dto_1.GetUserByTokenResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GrpcController.prototype, "createToken", null);
GrpcController = __decorate([
    (0, common_1.Controller)('grpc'),
    (0, swagger_1.ApiTags)('grpc'),
    __param(0, (0, common_1.Inject)('GRPC_SERVICE')),
    __metadata("design:paramtypes", [user_service_1.GrpcService])
], GrpcController);
exports.GrpcController = GrpcController;
//# sourceMappingURL=grpc.controller.js.map