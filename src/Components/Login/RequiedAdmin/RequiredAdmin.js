import React from 'react';
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Shared/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user)
   
    if (loading) {
        return <Loading></Loading>
    }

    if (!admin) {
        return <h1>404 not found</h1>
    }
    
    return children;
   
};

export default RequireAdmin;