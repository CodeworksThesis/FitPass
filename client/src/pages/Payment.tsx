import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import StripeCheckout from 'react-stripe-checkout';
import { useLocation } from 'react-router-dom';
import { formatDateTime } from '../utils/time';
import PageTitle from '../components/PageTitle';
import { useNavigate } from 'react-router-dom';
import { addBookings, getBookingsDetails } from '../utils/api.service';
import { useGymClass } from '../hooks/useGymClass'

// modified from youtube tutorial - https://www.youtube.com/watch?v=W-9uV_OQtV8
// https://github.com/aliseena/react-stripe-integration-master/blob/master/client/src/App.js

const mySwal = withReactContent(Swal);

const publishableKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY

export default function Payment() {
    const { userId, setBookings, setBookedGymClassDetails } = useGymClass();
    const { price, exerciseName, classDate, postPic, studioName, id } = useLocation().state
    const navigate = useNavigate()
    const priceInCent = price * 100;
    console.log(priceInCent)

    const handleSuccess = () => {
        mySwal.fire({
            icon: 'success',
            title: 'Payment was successful',
        })
        .then(() => {
            navigate('/')
            addBookings(userId as string, id)
            .then(data => setBookings(data))
            .catch(error => console.log(error))
        })

        getBookingsDetails(userId as string)
        .then(data => setBookedGymClassDetails(data))
        .catch(error => console.log(error))
    };
    const handleFailure = () => {
        mySwal.fire({
            icon: 'error',
            title: 'Payment was not successful',
        });
    };
    const getPaymentToken = async (token: unknown) => {
        try {
            const response = await fetch('http://localhost:3001/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: priceInCent,
                    token,
                }),
            });
            if(response) {
                const res= await response.json()
                if (res.status === 'success') {
                    handleSuccess();
                } else {
                    handleFailure();
                }
            } else {
                handleFailure();
            }
        } catch (error) {
            handleFailure();
            console.log('Payment failed');
        }
    };
    

    return (
        <div className="w-[90%] flex flex-col mt-24 mx-auto border-2 border-black rounded-lg overflow-hidden">
            <header className="mx-auto pt-4">
                {/* company logo */}
                <div className="w-12 h-12 mx-auto">
                    <img src="fitness.svg" alt="company logo" className="w-full h-full"/>
                </div>
                <PageTitle title="FitPass"/>
            </header>
            <div className="mt-2 w-[90%] h-[20rem] mx-auto rounded-lg overflow-hidden">
                {/* FitPass logo */}
                <img src={postPic} alt="" className="w-full h-full object-cover"/>
            </div>
            <article className="pl-[4%] pt-5">
                <p className="text-lg px-4 pt-3 pb-1">
                    <span className="font-bold">Exercise: </span>
                    {exerciseName}
                </p>
                <p className="text-lg px-4 pt-3 pb-1">
                    <span className="font-bold">Date: </span>
                    {formatDateTime(classDate)}
                </p>
                <p className="text-lg px-4 pt-3 pb-1">
                    <span className="font-bold">Price (€): </span>
                    {price}
                </p>
                <p className="text-lg px-4 pt-3 pb-1">
                    <span className="font-bold">Location: </span>
                    {studioName}
                </p>
            </article>
            <button className="flex justify-center py-10 scale-125 hover:scale-150">
                <StripeCheckout
                    stripeKey={publishableKey as string}
                    image = {postPic}
                    name="Pay With Credit Card"
                    billingAddress
                    amount={priceInCent} 
                    description={`Your total is EUR ${price}`}
                    token={getPaymentToken}
                    currency="EUR"
                    allowRememberMe
                />
            </button>
        </div>
    );
}

