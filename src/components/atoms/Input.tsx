import React from "react";

interface InputProps {
    placeholder: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    className?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    icon,
    iconPosition = 'left',
    className,
    type = 'text',
    value,
    onChange,
}) => {
    return (
        <div className={`flex items-center border-gray-900 border-2 rounded-full px-2 py-2 group ${className}`}>
            {icon && iconPosition === 'left' && <span className="mr-4 duration-100 group-hover:scale-110">{icon}</span>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="bg-transparent focus:outline-none w-full ml-2"
            />
            {icon && iconPosition === 'right' && <span className="ml-4 duration-100 group-hover:scale-110">{icon}</span>}
        </div>
    )
}

export default Input;