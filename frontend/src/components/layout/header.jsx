import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Button } from './ui/button';

const Header = () => {
    return (
        <header className='flex justify-between items-center px-25'>
            <div>Altruist</div>
            <SignedOut>
                <SignInButton>
                    <Button>Sign Up</Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton appearance={{ elements: { avatarBox: "w-8 h-8" } }} />
            </SignedIn>
        </header>
    )
}

export default Header
