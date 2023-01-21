import React from "react";

interface ContextInterface {
    prize: string;
    setPrize: (sum: string) => void;
}

export const Context = React.createContext<ContextInterface>({
    prize: '$ 0',
    setPrize: () => {},
});
