import React from "react";
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'


interface LayoutProps {
    children: React.ReactNode;
}

const LayoutComponent: React.FC<LayoutProps> = ({ children }:LayoutProps) => {

    const menus = [
        {name: "Home", icon: "solar:home-line-duotone", path:'/'},
        {name: "Propriedades", icon: "game-icons:farm-tractor", path:'/propriedades'},
        {name: "Animais", icon: "ph:cow-duotone", path:'/propriedades'}
    ]

    return (
        <div className="h-screen w-full">
            <div className="w-full fixed text-white h-16 px-14 py-4 bg-green-900">
                Home
            </div>
            <div className="flex justify-between">
                <div className="h-screen fixed flex mt-16 flex-col items-center py-8 w-14 bg-green-700">
                    {menus.map((item, index)=>(
                        <div key={index}>
                            <Link to={item.path}>
                                <Icon icon={item.icon} className="hover:bg-white hover:text-green-700 w-10 h-10 p-1 rounded-md  text-white text-3xl mb-8" />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="w-12/12 flex justify-end pl-28  px-14 pt-24 pb-14 bg-amber-50">
                    {children}
                </div>
            </div>
        </div>
    );
};


export default LayoutComponent