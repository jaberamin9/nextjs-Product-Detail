import { Button } from "@/components/ui/button";
import React from "react";

const sizes = [
    { value: "S", price: 69 },
    { value: "M", price: 79 },
    { value: "L", price: 89 },
    { value: "XL", price: 99 },
];

const SizeSelector = ({ selectedSize, onChange }) => {
    return (
        <div className="flex items-center gap-2 lg:gap-4">
            {sizes.map((size) => {
                return <Button
                    key={size.value}
                    className={`hover:bg-[#f4f4f4] h-[30px] sm:h-[40px] font-bold text-[10px] sm:text-[12px] md:text-[13px] leading-[10px] sm:leading-[20px] tracking-[0.26px] px-[7px] sm:px-[14px] md:px-[18px] py-[4px] md:py-2 border border-[#DBDFEA] rounded bg-white ${selectedSize.size === size.value ? "border-[#6576FF]" : "border-[#DBDFEA]"}`}
                    onClick={() => onChange({ size: size.value, price: size.price })}
                >
                    <span className={`${selectedSize.size === size.value
                        ? "text-[#6576FF]"
                        : "text-[#364A63]"
                        }`}> {size.value}</span><span className="text-[#8091A7] font-normal"> ${size.price}</span>
                </Button>
            })}
        </div>
    );
};

export default SizeSelector;
