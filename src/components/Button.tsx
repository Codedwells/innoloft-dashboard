import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import { useAppSelector } from '@/hooks/redux_hooks';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    onClick?: () => void;
}

export const Button = ({ children, onClick, className, ...rest }: ButtonProps) => {
    const appConfig = useAppSelector((state) => state.appConfigState);
    const mainColor = appConfig.id == 1 ? 'bg-[#272E71]' : `bg-[${appConfig.mainColor}]`;

    const buttonClasses = classNames(
        mainColor,
        'hover:opacity-90',
        'active:opacity-80',
        'transition-opacity',
        'duration-300',
        'text-white',
        'text-[0.85em]',
        'font-sans',
        'font-base',
        'px-[0.63rem]',
        'py-[0.32rem]',
        'rounded',
        className
    );

    return (
        <button onClick={onClick ? onClick : () => null} className={buttonClasses} {...rest}>
            {children}
        </button>
    );
};
