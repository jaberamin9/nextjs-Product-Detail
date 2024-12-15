import React from "react";
import AddIcon from "../../assets/add.svg"
import RemoveIcon from "../../assets/remove.svg"
import { Button } from "@/components/ui/button";

const Counter = ({ quantity, onChange, isMobileView }) => {
    return (
        <>{
            isMobileView ?
                <div className="flex items-center border border-[#DBDFEA] rounded overflow-hidden">
                    <Button
                        className="hover:bg-[#f4f4f4] w-[35px] h-[44px] bg-white border-r-[1px] border-[#DBDFEA] rounded-none flex items-center justify-center"
                        onClick={() => onChange(Math.max(1, quantity - 1))}
                    >
                        <div className="w-[14px] h-[2px]"><RemoveIcon /></div>
                    </Button>
                    <input
                        className="flex-1 w-full flex text-center items-center justify-center text-[#364A63] text-[14px]"
                        value={quantity}
                        onChange={(e) => onChange(Math.max(1, Math.min(100, e.target.value)))}
                    />
                    <Button
                        className="hover:bg-[#f4f4f4] w-[35px] h-[44px] bg-white border-l-[1px] border-[#DBDFEA] rounded-none flex items-center justify-center"
                        onClick={() => onChange(Math.min(100, quantity + 1))}
                    >
                        <AddIcon />
                    </Button>
                </div >
                :
                <div className="w-[130px] flex items-center border border-[#DBDFEA] rounded overflow-hidden">
                    <Button
                        className="hover:bg-[#f4f4f4] w-[35px] h-[36px] bg-white border-r-[1px] border-[#DBDFEA] rounded-none flex items-center justify-center"
                        onClick={() => onChange(Math.max(1, quantity - 1))}
                    >
                        <div className="w-[14px] h-[2px]"><RemoveIcon /></div>
                    </Button>
                    <input
                        className="w-full text-center flex items-center justify-center text-[#364A63] text-[14px]"
                        value={quantity}
                        onChange={(e) => onChange(Math.max(1, Math.min(100, e.target.value)))}
                    />
                    <Button
                        className="hover:bg-[#f4f4f4] w-[35px] h-[36px] bg-white border-l-[1px] border-[#DBDFEA] rounded-none flex items-center justify-center"
                        onClick={() => onChange(Math.min(100, quantity + 1))}
                    >
                        <AddIcon />
                    </Button>
                </div >
        }</>

    );
};

export default Counter;
