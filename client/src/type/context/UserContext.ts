import {UserType} from "../User";

export interface UserContextType {
    user: UserType|null,
    setUser(user: UserType): void
}
