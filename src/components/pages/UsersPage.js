import React, { useEffect, useState } from 'react';

export default function UsersPage() {
    const [loggedInUsers, setLoggedInUsers] = useState([]);

    useEffect(() => {
        fetch('/api/verifications/users')
            .then((res) => res.json())
            .then((data) => {
                // Supondo que cada usuário tenha um campo `isLoggedIn` que indica se o usuário está logado
                const loggedIn = data.filter(user => user.isLoggedIn);
                setLoggedInUsers(loggedIn);
            })
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="users-page">
            <h2>Lista de Usuários Logados</h2>
            <ul>
                {loggedInUsers.map((user) => (
                    <li key={user._id}>
                        {user.username} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
