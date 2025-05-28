import React from 'react';
import { auth,currentUser } from '@clerk/nextjs/server';


type Userinfo = {
    id: number;
    firstName: string
}

const Page = async() => {
    const authObj = await auth()
    const userobj = await currentUser()
    // userobj.imageUrl
    console.log(
        `User ID: ${userobj?.id}, User Name: ${userobj?.firstName}`,
        )

        console.log({authObj,userobj})
    return (
        <div>
            <h1>THIS PAGE IS PROTECTED BY CLERK</h1>
            <br />
            <h2>Logged in as:  <strong className='text-blue-500'>{userobj?.firstName}</strong> </h2>
            {/* <button onClick={() => authObj.signOut()}>Sign Out</button> */}
        </div>
    );
}

export default Page;
