import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/authAction';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const SignInForm = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const handleSumbit = e => {
        e.preventDefault();

        const login = dispatch(
            signIn({
                email: e.currentTarget.email.value,
                password: e.currentTarget.password.value,
            })
        );
        console.log(login.type);
    };

  return (
    <>
        <form onSubmit={handleSumbit}>
            <p>Sign in</p>
            <label htmlFor="email">Email</label>
            <Input
                focusBorderColor="pink.400"
                pr="1.5rem"
                border="1px solid grey"
                mb="2"
                placeholder="Enter email"
                type="email"
                name="email"
                id="email"
                isRequired
            />
            <label htmlFor="password">Password</label>
            <InputGroup size="md">
                <Input
                    focusBorderColor="pink.400"
                    pr="1.5rem"
                    border="1px solid grey"
                    mb="2"
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
                m="12px auto"
                display="block"
                type="submit"
                fontFamily="Raleway"
            >
                Login
            </Button>
            <Link to={'/register'}>Create new account</Link>
        </form>
    </>
  );
};