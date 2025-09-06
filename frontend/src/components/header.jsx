import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Button } from './ui/button';

const Header = () => {
    return (
        <header className='flex justify-between items-center'>
            <div>Altruist</div>
            <SignedOut>
                <SignInButton>
                    <Button>Sign Up</Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    )
}

export default Header
