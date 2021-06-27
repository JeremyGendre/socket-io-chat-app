import {UserType} from "./User";

export const MESSAGE_TYPES = {
    NORMAL: 'normal',
    INFO: 'info'
};

export interface MessageType{
    value: string,
    createdAt: Date,
    author: UserType,
    type: string
}
