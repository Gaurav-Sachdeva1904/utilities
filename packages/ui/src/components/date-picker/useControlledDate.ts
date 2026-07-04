import { useCallback, useState } from 'react';

export function useControllableDate<T>(
    controlled: T | undefined,
    defaultValue: T | undefined,
    onChange?: (value: T) => void,
    isControlled = controlled !== undefined,
) {
    const [uncontrolled, setUncontrolled] = useState(defaultValue);

    const value = isControlled ? controlled : uncontrolled;

    const setValue = useCallback(
        (next: T) => {
            if (!isControlled) {
                setUncontrolled(next);
            }
            onChange?.(next);
        },
        [isControlled, onChange],
    );

    return [value, setValue] as const;
}
