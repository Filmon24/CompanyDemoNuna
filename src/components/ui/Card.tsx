import React from 'react';

type CardProps = React.PropsWithChildren<{ className?: string }>;

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Card;
