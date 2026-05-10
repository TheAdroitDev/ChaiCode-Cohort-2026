import React from 'react'
import '../App.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function User() {
    const [userState, setuserState] = useState(Boolean)
    const [User, setUser] = useState()
    
    useEffect(() => {
        // fetch user
        const fetchUser = async () => {
            try {
                const response = await axios.get('https://api.freeapi.app/api/v1/public/randomusers', { timeout: 4000 });
                // since axios already parses json we don't need to use parser
                // const result = await response.json()

                console.log(response.data.data);

                setuserState(true)
            } catch (error) {
                console.error(error);
            }
        }
        fetchUser()
    }, [])

    if (!User) {
        return (
            <div className="loader">
                Loading...
            </div>
        )
    }

    return (
        <div className="user-page">
            <div className="user-container">

                <div className="user-card">

                    {/* Header */}
                    <div className="user-header"></div>

                    {/* Profile */}
                    <div className="user-profile">

                        <div className="avatar"></div>

                        <div className="user-info">
                            <h1>Full Name</h1>
                            <p className="email">email@example.com</p>
                            <p className="location">Location</p>
                        </div>

                    </div>

                    {/* Details */}
                    <div className="details-grid">

                        <div className="detail-box">
                            <p className="label">Phone</p>
                            <p className="value">---</p>
                        </div>

                        <div className="detail-box">
                            <p className="label">Age</p>
                            <p className="value">---</p>
                        </div>

                        <div className="detail-box">
                            <p className="label">Nationality</p>
                            <p className="value">---</p>
                        </div>

                        <div className="detail-box">
                            <p className="label">Username</p>
                            <p className="value">---</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default User