import { onAuthStateChanged, updateCurrentUser, } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import InnerText from '../components/Header/InnerText';
import DoctorCard from '../components/DoctorCard';
import { auth } from '../authentication/auth';
import { getDatabase, ref, onValue } from 'firebase/database';


function Home() {
    const [user, setUser] = useState(null);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const db = getDatabase();
        const doctorsRef = ref(db, 'doctors');
        const unsubscribe = onValue(doctorsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const doctorsList = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setDoctors(doctorsList);
            }
        });
        return () => unsubscribe();// all clear 
    }, []);

    return (

        <div className=' flex-col justify-center p-10 '>
            <div className=" bg-gray-100 py-10">
                {!user ? (
                    <InnerText />
                ) : (
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <h2 className="text-3xl text-gray-800 animate backdrop-blur-2xl font-semibold mb-6  justify-center">Consulted With Best Doctors</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {doctors.map((doctor) => (
                                <DoctorCard key={doctor.id}
                                    name={doctor.name}
                                    specialty={doctor.specialty} image={doctor.image}
                                    rating={doctor.rating}
                                    available={doctor.available} />
                            ))}
                        </div>

                    </div>
                )}
            </div>
        </div>

    );
}

export default Home
