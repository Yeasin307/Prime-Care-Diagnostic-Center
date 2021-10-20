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
    const [isLogin, setIsLogin] = useState(false);

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
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }

    }

    const processLogin = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const userData = result.user;
                setUser(userData);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const registerNewUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const userData = result.user;
                const info = { ...userData, displayName: name }
                setError('');
                verifyEmail();
                setUserName();
                setUser(info);
            })
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
        signInUsingGoogle,
        toggleLogin,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleResetPassword,
        logOut,
        setUser
    }
}

export default useFirebase;