import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import Validator from '../../Helpers/Validation/Validations';


export const Form = () => {
    let navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [error, setError] = useState({});


    const handleEmailChange = (event) => {
        if (!Validator.emailValidate(event.target.value)) {
            setError({
                ...error,
                email: 'Please enter a valid email address!',
            });
        } else {
            setError({
                ...error,
                email: '',
            });
        }
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        if (!Validator.passwordValidate(event.target.value)) {
            setError({
                ...error,
                password: 'Password must be between 6 and 50 characters!',
            });
        } else {
            setError({
                ...error,
                password: '',
            });
        }
        setPassword(event.target.value);
    };
    const handleUsernameChange = (event) => {
        if (!Validator.max50CharsValidate(event.target.value)) {
            setError({
                ...error,
                username: 'Username must be lower than 50 characters!',
            });
        } else {
            setError({
                ...error,
                username: '',
            });
        }
        setUsername(event.target.value);
    };

    const handleConfirmedPasswordChange = (event) => {
        if (!Validator.passwordValidate(event.target.value)) {
            setError({
                ...error,
                confirmedPassword: 'Password must be between 6 and 50 characters!',
            });
        } else if (event.target.value !== password) {
            setError({
                ...error,
                confirmedPassword: "Password's must match!",
            });
        } else {
            setError({
                ...error,
                confirmedPassword: '',
            });
        }
        setConfirmedPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let body = {
            email,
            password,
            username
        };

        await AuthService.register(body)
            .then(() => {
                navigate("/", {replace: true});
            })
            .catch(() => {
            });
    };

    useEffect(() => {
        (async () => {
            if (await AuthService.verify(localStorage.getItem('token')))
                navigate("/", {replace: true});

            else localStorage.removeItem('token');
        })();
    },);

    return (
        <form>
            <div>
                <div/>
                <div>
                    <p>email</p>
                    <input
                        type="text"
                        required
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        autoComplete="email"
                    />
                </div>
                <div>
                    <p>username</p>

                    <input
                        type="text"
                        required
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        autoComplete="username"
                    />
                </div>
                <div>
                    <p>password</p>

                    <input
                        type="password"
                        required
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        autoComplete="password"
                    />
                </div>
                <div>
                    <p>confirm password</p>

                    <input
                        type="password"
                        color="secondary"
                        required
                        id="confirmPassword"
                        name="confirmPassword"
                        autoComplete="password"
                        value={confirmedPassword}
                        onChange={handleConfirmedPasswordChange}
                    />
                </div>
                <button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                    disabled={
                        error.email ||
                        error.password ||
                        error.confirmedPassword ||
                        email === '' ||
                        password === '' ||
                        confirmedPassword === ''
                    }
                >
                    REGISTER
                </button>
            </div>
        </form>
    );
};

const RegisterPage = () => {
    return (
        <>
            <div>
                <div>

                    <h5>
                        Sign up
                    </h5>
                    <Form/>
                    <div>
                        <div>
                            <Link
                                to="/login"
                                style={{
                                    color: '#2B2B2B',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                }}
                            >
                                Already have an account? Log In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default RegisterPage;