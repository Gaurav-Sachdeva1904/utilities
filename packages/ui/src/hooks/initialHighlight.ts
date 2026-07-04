import { useCallback, useState } from 'react';

export function useInitialHighlightSuppression() {
    const [suppressInitialHighlight, setSuppressInitialHighlight] = useState(false);

    const handleOpenChange = useCallback((open: boolean) => {
        setSuppressInitialHighlight(open);
    }, []);

    const releaseInitialHighlight = useCallback(() => {
        setSuppressInitialHighlight(current => (current ? false : current));
    }, []);

    return {
        suppressInitialHighlight,
        handleOpenChange,
        releaseInitialHighlight,
    };
}
