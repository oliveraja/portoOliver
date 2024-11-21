import { createContext, useContext, useState } from 'react';

type AnimationContextType = {
    startLandingAnimation: boolean;
    setStartLandingAnimation: (value: boolean) => void;
};

const AnimationContext = createContext<AnimationContextType>({
    startLandingAnimation: false,
    setStartLandingAnimation: () => {},
});

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
    const [startLandingAnimation, setStartLandingAnimation] = useState(false);

    return (
        <AnimationContext.Provider value={{ startLandingAnimation, setStartLandingAnimation }}>
            {children}
        </AnimationContext.Provider>
    );
};

export const useAnimation = () => useContext(AnimationContext);