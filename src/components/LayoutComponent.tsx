import React from "react";
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'


interface LayoutProps {
    children: React.ReactNode;
}

const LayoutComponent: React.FC<LayoutProps> = ({ children }:LayoutProps) => {
    return (
        <div className="h-screen w-full">
            <div className="w-full text-white h-16 px-14 py-4 bg-green-500">
                Home
            </div>
            <div className="flex">
                <div className="h-screen flex flex-col items-center py-8 w-14 bg-green-400">
                    <div>
                        <Link to="/" >
                            <Icon icon="solar:home-line-duotone" className="hover:text-green-700 text-white text-3xl mb-8" />                    
                        </Link>
                    </div>
                    <div>
                        <Link to="/propriedades">
                            <Icon icon="game-icons:farm-tractor" className="hover:text-green-700 text-white text-3xl mb-8" />
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <Icon icon="ph:cow-duotone" className="hover:text-green-700 text-white text-3xl mb-8" />
                        </Link>
                    </div>
                </div>
                <div className="w-full  p-8 bg-amber-50 ">
                    {children}
                </div>
            </div>
        </div>
    );
};


export default LayoutComponent