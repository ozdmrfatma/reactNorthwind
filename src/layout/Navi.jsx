import React,{useState} from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import {Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SingedIn from './SingedIn'

export default function Navi() {
    //dest
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const history=useHistory()

    function handleSignOut() {
        setIsAuthenticated(false);
        history.push("/")
    }
    function handleSignIn() {
        setIsAuthenticated(true);
        
    }

    return (
        <div>
            <Menu inverted size='large' fixed="top">
            <Container>
                <Menu.Item as={NavLink} to="/" name='home'/>
                <Menu.Item name='messages'/>

                <Menu.Menu position='right'>
                   <CartSummary/>
                  {isAuthenticated?<SingedIn signOut={handleSignOut} />: <SignedOut signIn={handleSignIn} />} 
                </Menu.Menu>
            </Container>

            </Menu>
        </div>
    )
}
