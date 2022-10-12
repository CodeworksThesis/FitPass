import React from 'react';
import Button from '../components/Button'
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, Link } from 'react-router-dom';


const Profile = () =>{

    const { user, isAuthenticated } = useAuth0();

    const navigate = useNavigate();

    return(
        <>
        { isAuthenticated ? 
            <>
            <div>
            <div className="relative block flex flex-col w-full items-center mt-6">
            <img src={user?.picture} className="object-cover w-36 h-36 rounded-full custom-position object-cover border-4 border-[#6F87F5]"></img>
            </div>
            <p className='text-lg text-center font-bold pt-4 pb-4'>{user?.name}</p>
            <div className='flex flex-col items-center h-72 justify-between'>
            {/* <Button buttonClick={() => {navigate('/favourites')}} buttonText='Favourites' />
            <Button buttonClick={() => {navigate('/bookings')}} buttonText='Bookings' />
            <Button buttonClick={() => {navigate('/stats')}} buttonText='Stats' />
            <Button buttonClick={() => {navigate('/settings')}} buttonText='Settings' /> */}
            <Link to="" className='w-full flex justify-center'><Button buttonText='Favourites' /></Link>
            <Link to="" className='w-full flex justify-center'><Button buttonText='Booking' /></Link>
            <Link to="/stats" className='w-full flex justify-center'><Button buttonText='Stats' /></Link>
            <Link to="" className='w-full flex justify-center'><Button buttonText='Settings' /></Link>
            </div>
            </div>
            </>
        : navigate('/')}
        </>
    )
}

export default Profile;




// import React from 'react';
// import Button from '../components/Button';
// import { Route, Routes, Link } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';


// interface User {
//     id: string,
//     profilePic:string,
// }


// function Profile(user: User){
//     return(
//         <div>
//             <div className="relative block flex flex-col w-full items-center mt-6">
//                 <img src={user.profilePic} className="object-cover w-36 h-36 rounded-full custom-position border-4 border-[#6F87F5]"></img>
//             </div>
//             <p className='text-lg text-center font-bold pt-4 pb-4'>{user.id}</p>
//             <div className='flex flex-col items-center h-72 justify-between'>
//                 <Link to="" className='w-full flex justify-center'><Button buttonText='Favourites' /></Link>
//                 <Link to="" className='w-full flex justify-center'><Button buttonText='Booking' /></Link>
//                 <Link to="/stats" className='w-full flex justify-center'><Button buttonText='Stats' /></Link>
//                 <Link to="" className='w-full flex justify-center'><Button buttonText='Settings' /></Link>
//             </div>
//         </div>
//     )
// }

// export default Profile;