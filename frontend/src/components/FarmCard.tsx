import React from 'react';

type Props = {
    name: string;
    location: string;
    owner: string;
};

const FarmCard = ({ name, location, owner }: Props) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
            <h3>{name}</h3>
            <p>{location} – {owner}</p>
        </div>
    );
};

export default FarmCard;
