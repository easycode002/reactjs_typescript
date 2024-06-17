import React, { useState } from "react";
import Input from "../../components/atoms/Input";
import { FaSearch } from "react-icons/fa";

const Input_Component:React.FC = () =>{
    // new state for manage input
    const [inputValue,setInputValue] = useState("")
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(e.target.value);
    }   
    return(
        <div className="p-5 bg-red-300 m-5 h-1/2">
            <Input
                placeholder="Search...."
                icon={<FaSearch />}
                className=""
                value={inputValue}
                onChange={handleChange}
                iconPosition="right"
                size="large"
            />
            <h1 className="ml-10">{"==> "+inputValue}</h1>
        </div>
    );
}
export default Input_Component;