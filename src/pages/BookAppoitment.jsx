import React, { useEffect, useState } from 'react'
import { getDatabase, ref, update,get } from 'firebase/database'
import { useNavigate } from 'react-router-dom';
import { auth } from '../authentication/auth';


function BookAppoitment() {

    const[balance, setblance]= useState({Walletbalance: 0});
    const navigate = useNavigate();

    useEffect(()=>{
        const user = auth.currentUser;
        if(!user){
            navigate('/login');
            return;
        }
        const db = getDatabase();
        const walletref = ref(db, `users/${user.uid}/wallet`);
        get(walletref).then((snapshot)=>{
            if(snapshot.exists()){
                setblance(snapshot.val());
            }
        })
    },[]);

    const handleConfirmBooking = async() =>{
        const user = auth.currentUser;
        const db = getDatabase();
        const walletref =  ref(db, `users/${user.uid}/wallet`);

        if(balance < 100){
          
            navigate('/wallet');
            return ;
        }
        await update(walletref, {Walletbalance :balance.Walletbalance-100});
        alert('Appoitement booked');
        navigate('/');
    }
  return (
     <div className="max-w-xl mx-auto mt-10 bg-white shadow p-6 rounded">
      <h2 className="text-2xl font-semibold mb-4">Confirm Appointment</h2>
      <p className="mb-2">Wallet Balance: ₹{balance.Walletbalance}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleConfirmBooking}
      >
        Confirm Booking
      </button>
    </div>
  )
}

export default BookAppoitment;
