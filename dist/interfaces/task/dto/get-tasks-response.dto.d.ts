import { ITask } from '../task.interface';
export declare class GetTasksResponseDto {
    message: string;
    data: {
        tasks: ITask[];
    };
    errors: {
        [key: string]: any;
    };
}
