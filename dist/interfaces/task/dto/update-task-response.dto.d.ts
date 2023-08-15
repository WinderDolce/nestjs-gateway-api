import { ITask } from '../task.interface';
export declare class UpdateTaskResponseDto {
    message: string;
    data: {
        task: ITask;
    };
    errors: {
        [key: string]: any;
    };
}
