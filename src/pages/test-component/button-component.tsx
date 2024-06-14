import React, { useState } from "react";
import Button from "../../components/atoms/Button";
import { SlCallOut } from "react-icons/sl";

const Button_Component: React.FC = () => {
    // create new state for loading button
    const [isLoading,setIsLoading] = useState(false);
    const onClickHanlder = () => {
        alert('បងស្រឡាញ់អូន!')
        setIsLoading(true);
        setTimeout(()=>setIsLoading(false),10)
    }
    return (
        <div className="py-7 px-7">
            <Button
                variant="primary"
                className=""
                onClick={onClickHanlder}
                type="button"
                loading={isLoading}
                disables={false}
                // icon={<span>🔔</span>}
                icon={<SlCallOut />}
                iconPosition="right"
            >
                Click Me
            </Button>
        </div>
    );
}

export default Button_Component;