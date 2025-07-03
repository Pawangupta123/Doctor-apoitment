import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import LogOut from '../../pages/LogOut';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Header() {
  const [user, setuser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unScribe = onAuthStateChanged(auth, (user) => {
      setuser(user)
    });
    return () => unScribe;
  }, [])
  return (

    <div className='p-3 shadow-sm flex justify-between items-center px-5 bg-white'>
      <img src='/logo.svg' className='h-10' />

      
      <div className="flex items-center gap-3">
        {!user ? (
          <Link to="/login">
            <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
              Sign In
            </Button>
          </Link>
        ) : (
          <div className="flex items-center gap-2"> {/* controlled gap */}
            <Link to="/wallet">
              <Button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
                Wallet
              </Button>
            </Link>
            <LogOut />
          </div>
        )}
      </div>

    </div>
  );
}



export default Header;
