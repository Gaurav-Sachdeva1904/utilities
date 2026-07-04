import React from 'react';

function CardHeader({ children }: { children: React.ReactNode }) {
    return <div className="ui-card-header">{children}</div>;
}

CardHeader.displayName = 'CardHeader';

export default CardHeader;
