import { ITask } from '../task.interface';
export declare class CreateTaskResponseDto {
    message: string;
    data: {
        task: ITask;
    };
    errors: {
        [key: string]: any;
    };
}
