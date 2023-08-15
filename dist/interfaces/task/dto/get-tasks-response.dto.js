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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTasksResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetTasksResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'task_search_success' }),
    __metadata("design:type", String)
], GetTasksResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            tasks: [
                {
                    notification_id: null,
                    name: 'test task',
                    description: 'test task description',
                    start_time: +new Date(),
                    duration: 90000,
                    user_id: '5d987c3bfb881ec86b476bca',
                    is_solved: false,
                    created_at: +new Date(),
                    updated_at: +new Date(),
                    id: '5d987c3bfb881ec86b476bcc',
                },
            ],
        },
        nullable: true,
    }),
    __metadata("design:type", Object)
], GetTasksResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'null' }),
    __metadata("design:type", Object)
], GetTasksResponseDto.prototype, "errors", void 0);
exports.GetTasksResponseDto = GetTasksResponseDto;
//# sourceMappingURL=get-tasks-response.dto.js.map