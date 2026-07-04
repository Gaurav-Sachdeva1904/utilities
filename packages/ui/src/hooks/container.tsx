import { useLayoutEffect, useState } from 'react';
import { usePortalContainerContext } from '@hooks/portalContainer';

/**
 * Finds the nearest theme root (.ui-provider) and returns it
 * as a safe portal container.
 */
export function useThemedPortal(anchor?: HTMLElement): HTMLElement | undefined {
    const contextualContainer = usePortalContainerContext();
    const [container, setContainer] = useState<HTMLElement | undefined>(undefined);

    useLayoutEffect(() => {
        if (typeof document === 'undefined') return;

        if (contextualContainer) {
            setContainer(contextualContainer);
            return;
        }

        // 1. Prefer nearest provider (future-proof)
        if (anchor) {
            const nearestProvider = anchor.closest<HTMLElement>('.ui-provider');
            if (nearestProvider) {
                setContainer(nearestProvider);
                return;
            }
        }

        // 2. Fallback: first provider on page
        const globalProvider = document.querySelector<HTMLElement>('.ui-provider');

        if (globalProvider) {
            setContainer(globalProvider);
            return;
        }

        // 3. Last resort (safe fallback)
        setContainer(document.body);
    }, [anchor, contextualContainer]);

    return container;
}
