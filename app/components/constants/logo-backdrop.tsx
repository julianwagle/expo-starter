import React from 'react';
import { Logo } from '../logo/logo';

export const LogoBackdrop = () => {

    return (
        <>
            <Logo
                size={{ base: 64, md: 450 }}
                zIndex={-1}
                opacity={0.4}
                _ios={{
                    opacity: 0.6,
                }}
                position="absolute"
                top={{ base: -80, md: -180 }}
                right={{ base: -60, md: -100 }}
            />
        </>
    );
};
