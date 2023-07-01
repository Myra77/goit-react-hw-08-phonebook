import { Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
    return (
        <>
            <Button colorScheme="darkblue" variant="outline" fontFamily="Raleway">
                <NavLink to="/register"> SignUp</NavLink>
            </Button>
            <Button colorScheme="blue" variant="outline" ml="8px" fontFamily="Raleway">
                <NavLink to="/login"> SignIn</NavLink>
            </Button>
        </>
    );
};