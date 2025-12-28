"use client"
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import React, { createContext, useEffect, useState } from 'react'
import { UserDetailContext } from './context/UserDetailContext'

function Provider({children}: any) {

    const {user} = useUser();

    const CreateUser= useMutation(api.users.CreateNewUser);
    const [userDetail,setUserDetail]=useState<any>()

    useEffect(()=>{
        user && createNewUser();
    },[user])

    const createNewUser=async()=>{
        if(user){
            const result = await CreateUser({
                email:user?.primaryEmailAddress?.emailAddress??'',
                imageUrl:user?.imageUrl,
                name:user?.fullName??''
            })
            setUserDetail(result);
        }
    }

    return (
        <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
            <div>{children}</div>
        </UserDetailContext.Provider>
        
    )
}

export default Provider

export const useUserDetailContext=()=>{
    return createContext(UserDetailContext);
}