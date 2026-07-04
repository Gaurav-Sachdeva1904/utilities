import React from 'react';

function CardContent({ children }: { children: React.ReactNode }) {
    return <div className="ui-card-content">{children}</div>;
}

CardContent.displayName = 'CardContent';

export default CardContent;
