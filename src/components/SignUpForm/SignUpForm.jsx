import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/authAction';
import { Link } from 'react-router-dom';
import css from './SignUpForm.module.css';

export const SignUpForm = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const handleSumbit = e => {
        e.preventDefault();

        const newUser = {
            email: e.currentTarget.email.value,
            name: e.currentTarget.name.value,
            password: e.currentTarget.password.value,
        };

        dispatch(signUp(newUser));
    };

    return (
        <>
            <form className={css.signInForm} onSubmit={handleSumbit}>
                <p className={css.signInTitle}>Sign up</p>
                <label htmlFor="email">Email</label>
                <Input
                    border="1px solid grey"
                    mb="2"
                    focusBorderColor="pink.400"
                    pr="1.5rem"
                    placeholder="Enter email"
                    type="email"
                    name="email"
                    id="email"
                    isRequired
                />
                <label htmlFor="name">User Name</label>
                <Input
                    border="1px solid grey"
                    focusBorderColor="pink.400"
                    pr="1.5rem"
                    mb="2"
                    placeholder="Enter username"
                    type="text"
                    name="name"
                    id="name"
                    isRequired
                />
                <label htmlFor="password">Password</label>
                <InputGroup size="md">
                    <Input
                        border="1px solid grey"
                        focusBorderColor="pink.400"
                        pr="1.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder="Enter password"
                        name="password"
                        id="password"
                        isRequired
                    />
                    <InputRightElement width="4.5rem">
                        <Button
                            fontFamily="Raleway"
                            h="1.75rem"
                            size="sm"
                            onClick={handleClick}
                        >
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Button
                    colorScheme="blue"
                    variant="outline"
                    display="block"
                    m="12px auto"
                    type="submit"
                    fontFamily="Raleway"
                >
                    Register Now
                </Button>
                <Link to={'/login'} className={css.createAccount}>Already have an account?</Link>
            </form>
        </>
    );
};