import React, {createContext, PropsWithChildren, useState} from 'react';
import {UserContextType} from "../type/context/UserContext";
import {UserType} from "../type/User";

const contextDefaultValue: UserContextType = {
    user: null,
    setUser : () => {}
};

export const UserContext = createContext<UserContextType>(contextDefaultValue);

export default function UserContextProvider({children}: PropsWithChildren<any>){
    const [user, setUser] = useState<UserType|null>(null);

    return(
        <UserContext.Provider value={{
            user: user,
            setUser: setUser
        }}>
            {children}
        </UserContext.Provider>
    );
}
