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
exports.RedisController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authorization_decorator_1 = require("./decorators/authorization.decorator");
const get_user_by_token_response_dto_1 = require("./interfaces/user/dto/get-user-by-token-response.dto");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let RedisController = class RedisController {
    constructor(authUserService) {
        this.authUserService = authUserService;
    }
    async getUser(request) {
        console.log(this.authUserService);
        const pattern = { cmd: 'getUser' };
        const userResponse = await (0, rxjs_1.firstValueFrom)(this.authUserService.send(pattern, {}));
        return {
            message: 'successful',
            data: userResponse,
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_user_by_token_response_dto_1.GetUserByTokenResponseDto,
    }),
    (0, swagger_1.ApiTags)('redis'),
    (0, common_1.Get)('/redis'),
    (0, swagger_1.ApiOkResponse)({
        type: get_user_by_token_response_dto_1.GetUserByTokenResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RedisController.prototype, "getUser", null);
RedisController = __decorate([
    (0, common_1.Controller)('redis'),
    (0, swagger_1.ApiTags)('redis'),
    __param(0, (0, common_1.Inject)('REDIS_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientRedis])
], RedisController);
exports.RedisController = RedisController;
//# sourceMappingURL=redis.controller.js.map