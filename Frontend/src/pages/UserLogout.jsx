import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
    const navigate = useNavigate();
    const [isLoggingOut, setIsLoggingOut] = useState(true);

    useEffect(() => {
        const logout = async () => {
            try {
                const token = localStorage.getItem('token');
                
                if (token) {
                    // Try to logout from server
                    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    
                    if (response.status === 200) {
                        console.log('Server logout successful');
                    }
                }
            } catch (err) {
                console.log('Logout API error:', err.response?.data?.message || err.message);
                
                // Check if it's a 401 (token already invalid/expired)
                if (err.response?.status === 401) {
                    console.log('Token already invalid, proceeding with local logout');
                }
            } finally {
                // Always clear local storage and redirect
                localStorage.removeItem('token');
                setIsLoggingOut(false);
                
                // Small delay to show the logout message
                setTimeout(() => {
                    navigate('/login');
                }, 500);
            }
        };

        logout();
    }, [navigate]);

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            flexDirection: 'column'
        }}>
            {isLoggingOut ? (
                <>
                    <div>Logging out...</div>
                    <div style={{ marginTop: '10px' }}>Please wait...</div>
                </>
            ) : (
                <div>Logged out successfully. Redirecting...</div>
            )}
        </div>
    );
};

export default UserLogout;