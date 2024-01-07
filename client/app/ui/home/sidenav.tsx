'use client'

import React from 'react';

interface IconCardProps {
    location: string;
    name: string;
}

const IconCard: React.FC<IconCardProps> = ({name, location})=>{
    return (
        <div>
            <div>
                <img src={location} alt={name} /> 
                {/* userd require to get the image through next js image */}
            </div>
            <div>{name}</div>
        </div>
    )
}



export default function SideNav() {
    return (
        <div>
            {
                arrayOfElements.map((element)=>{
                    return <IconCard
                        name={element.name}
                        location={element.location}
                    />
                })
            }
        </div>
    )
}