import React, {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {UserContextType} from "../type/context/UserContext";
import {UserType} from "../type/User";
import {getRandomInt} from "../utils/main";

const contextDefaultValue: UserContextType = {
    user: null,
    setUser : () => {}
};

export const UserContext = createContext<UserContextType>(contextDefaultValue);

export default function UserContextProvider({children}: PropsWithChildren<any>){
    const [user, setUser] = useState<UserType|null>(null);

    useEffect(() => {
        const uid = getRandomInt(9999999);
        setUser({
            id: uid,
            name: `Jean Hubert${uid}`,
            username: `ouaisre${uid}`,
            email: `ouaisre${uid}@gmail.com`
        });// TODO : Real user
    },[]);

    return(
        <UserContext.Provider value={{
            user: user,
            setUser: setUser
        }}>
            {children}
        </UserContext.Provider>
    );
}
