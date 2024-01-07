'use client'

import React from 'react';
import { IconCardProps } from '../../interfaces/common';
import { arrayOfSidenavElements } from '../../home/data';

const IconCard: React.FC<IconCardProps> = ({name, location})=>{
    return (
        <div className="flex gap-2">
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
        <div className='flex flex-col gap-2 bg-green-400'>
            {
                arrayOfSidenavElements.map((element)=>{
                    return <IconCard
                        name={element.name}
                        location={element.location}
                    />
                })
            }
        </div>
    )
}