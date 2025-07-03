import { getDatabase,ref , get,update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { auth } from '../authentication/auth';

function Wallet() {
    const [balance, setblance] = useState(0);
    const [addAmount, setaddAmount] = useState('');
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
        });

    },[]);
    const handleaddAmount = async()=>{
        const user = auth.currentUser;
        const db = getDatabase();
        const walletref =  ref(db, `users/${user.uid}/wallet`);

        const newBalance = balance + parseInt(addAmount);
        if(isNaN(newBalance) || newBalance < 0){
            alert("Invalid amount");
            return;
        }
        await update(walletref, { Walletbalance: newBalance });
        setblance(newBalance);
        setaddAmount('');
        alert('Amount added successfully');
    }
    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Wallet</h2>
      <p className="text-lg mb-4 text-center">Current Balance: ₹{balance}</p>

      <input
        type="number"
        placeholder="Enter amount to add"
        className="w-full p-2 border rounded mb-4"
        value={addAmount}
        onChange={(e) => setaddAmount(e.target.value)}
      />

      <button
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        onClick={handleaddAmount}
        disabled={!addAmount}
      >
        Add Money
      </button>

      <button
        className="w-full mt-4 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
        onClick={() => navigate('/')}
      >
        Go Back
      </button>
    </div>
    )
}
export default Wallet;
