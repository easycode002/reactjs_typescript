// import the React library for React component
import React from "react";

// define buttonprops interface
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disables?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?:'left' | 'right';
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'default' | 'myButton';
    size?: 'small' | 'medium' | 'large';  // Added size prop
}

// define button component
const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = '',
    type = 'button',
    disables = false,
    loading = false,
    icon,
    iconPosition = 'left',
    variant = 'primary',
    size = 'medium',
}) => {
    // base and condition class
    const baseClasses = 'flex items-center justify-center px-6 py-2 font-medium';
    const disablesClasses = 'opacity-50 cursor-not-allowed';
    const variantClasses = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600 rounded-sm duration-100 hover:scale-105 hover:-rotate-1',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 rounded-sm duration-100 hover:scale-105 hover:-rotate-1',
        success: 'bg-green-500 text-white hover:bg-green-600 rounded-sm duration-100 hover:scale-105 hover:-rotate-1',
        danger: 'bg-red-500 text-white hover:bg-red-600 rounded-sm duration-100 hover:scale-105 hover:-rotate-1',
        default: 'border-2 border-gray-500 duration-100 hover:scale-105 hover:-rotate-1',
        myButton: 'px-6 py-3 bg-[#920e0e7] rounded-full text-white font-bold duration hover:bg-[#933531]',
    };

    // define class size for button
    const sizeClasses = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-3 py-2 text-base',
        large: 'px-4 py-3 text-lg',
    };

    // return button element
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disables || loading ? disablesClasses : ''}`}
        >
            {loading && <span className="loader mr-2"></span>}
            {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </button>
    );
}

// export the button component.
export default Button;