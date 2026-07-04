import { Dropdown as DropdownWrapper } from '@components/dropdown/dropdown';
import { DropdownTrigger } from '@components/dropdown/dropdownTrigger';
import { DropdownContent } from '@components/dropdown/dropdownContent';
import { DropdownItem } from '@components/dropdown/dropdownItem';
import { DropdownSeparator } from '@components/dropdown/dropdownSeparator';

import '@components/dropdown/dropdown.scss';

export {
    DropdownWrapper as Dropdown,
    DropdownTrigger as Trigger,
    DropdownContent as Content,
    DropdownItem as Item,
    DropdownSeparator as Separator,
};

export type { DropdownProps } from '@components/dropdown/dropdown';
export type { DropdownItemProps } from '@components/dropdown/dropdownItem';
