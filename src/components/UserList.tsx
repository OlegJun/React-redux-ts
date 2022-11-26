import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creaters/user";
import {useAction} from "../hooks/useAction";

const UserList: FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useAction()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }
    if (error) {
        return (
            <h1>Error: {error}</h1>
        )
    }

    return (
        <div>
            {users.map((user) =>
                <div
                    key={user.id}
                >
                    {user.name}
                </div>
            )}
        </div>
    );
};

export default UserList;