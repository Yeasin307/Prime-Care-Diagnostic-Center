import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    const toggleLogin = e => {
        setIsLogin(!isLogin);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = () => {
        // e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            return processLogin(email, password);
        }
        else {
            return registerNewUser(email, password);
        }

    }

    const processLogin = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const registerNewUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const setUserName = () => {
        setIsLoading(true);
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
            })
            .finally(() => setIsLoading(false));
    }

    const verifyEmail = () => {
        setIsLoading(true);
        sendEmailVerification(auth.currentUser)
            .then(result => {
            })
            .finally(() => setIsLoading(false));
    }

    const handleResetPassword = () => {
        setIsLoading(true);
        sendPasswordResetEmail(auth, email)
            .then(result => {
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        isLogin,
        error,
        name,
        signInUsingGoogle,
        toggleLogin,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleResetPassword,
        logOut,
        setUser,
        setError,
        verifyEmail,
        setUserName
    }
}

export default useFirebase;