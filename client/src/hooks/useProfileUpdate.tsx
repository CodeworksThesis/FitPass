import React from "react";
import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

interface ProfileProps {
    nickname: string
    profilePic: string
    setNickname: React.Dispatch<React.SetStateAction<string>>
    setProfilePic: React.Dispatch<React.SetStateAction<string>>
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ProfileContext = createContext<ProfileProps>({ nickname: '', profilePic: '', setNickname: () => { }, setProfilePic: () => { } })

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
    const [nickname, setNickname] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const { user } = useAuth0()


    useEffect(() => {
        if (user) {
            setNickname(user.nickname as string)
            setProfilePic(user.picture as string)
        }
    }, [user])

    const value = { nickname, setNickname, profilePic, setProfilePic }

    return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>

}

export function useProfileUpdate() {
    return useContext(ProfileContext)
}