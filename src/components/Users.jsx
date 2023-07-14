import react from 'react';
import UserItem from './UserItem';

const Users = ({ users }) => {
    return users.map((user) => (
        <UserItem user={user} key={user.id}/>
    ));
};

export default Users
