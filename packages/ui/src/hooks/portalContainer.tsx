import React from 'react';

export const PortalContainerContext = React.createContext<HTMLElement | undefined>(undefined);

export function usePortalContainerContext() {
    return React.useContext(PortalContainerContext);
}
