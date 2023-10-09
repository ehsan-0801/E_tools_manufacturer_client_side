import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UpdateModal from './UpdateModal';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [modal, setModal] = useState(null)
    return (
        <div>
            <h1>Name:{ user.displayName }</h1>
            <h1>Email:{ user.email }</h1>
            <label htmlFor="profileUpdate-modal" class="btn btn-outline btn-primary modal-button" onClick={ () => setModal() }>Update Info</label>
            { <UpdateModal
                key={ user.uid }
                user={ user }
                setModal={ setModal }
            ></UpdateModal> }
        </div>
    );
};

export default MyProfile;