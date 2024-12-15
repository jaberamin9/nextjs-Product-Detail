import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const colors = [
    { value: "purple", colorCode: "#816BFF" },
    { value: "cyan", colorCode: "#1FCEC9" },
    { value: "blue", colorCode: "#4B97D3" },
    { value: "black", colorCode: "#3B4747" },
];

const ColorSelector = ({ selectedColor, onChange, setIsLoading }) => {

    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 640);

    const handleResize = () => {
        setIsMobileView(window.innerWidth <= 640);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <RadioGroup
            className="flex items-center space-x-1"
            onValueChange={(value) => { onChange(value), setIsLoading(true) }}
            value={selectedColor}
        >
            {colors.map((color) => (
                <div key={color.value} className="flex items-center">
                    <RadioGroupItem
                        value={color.value}
                        id={color.value}
                        className="hidden"
                    />
                    {isMobileView ? <label
                        htmlFor={color.value}
                        className="cursor-pointer w-6 h-6 rounded-full flex justify-center items-center relative"
                        style={{
                            backgroundColor: color.colorCode,
                            width: '12px',
                            height: '12px',
                            "--after-bg": color.colorCode,
                            ...(selectedColor === color.value && {
                                border: `2px solid ${color.colorCode}`,
                                backgroundColor: 'white',
                                width: '20px',
                                height: '20px',
                            }),
                        }}
                    >
                        {selectedColor === color.value && (
                            <span
                                style={{
                                    backgroundColor: color.colorCode,
                                }}
                                className="absolute w-3 h-3 rounded-full"
                            ></span>
                        )}
                    </label> :
                        <label
                            htmlFor={color.value}
                            className="cursor-pointer w-6 h-6 rounded-full flex justify-center items-center relative"
                            style={{
                                backgroundColor: color.colorCode,
                                width: '16px',
                                height: '16px',
                                "--after-bg": color.colorCode,
                                ...(selectedColor === color.value && {
                                    border: `2px solid ${color.colorCode}`,
                                    backgroundColor: 'white',
                                    width: '24px',
                                    height: '24px',
                                }),
                            }}
                        >
                            {selectedColor === color.value && (
                                <span
                                    style={{
                                        backgroundColor: color.colorCode,
                                    }}
                                    className="absolute w-4 h-4 rounded-full"
                                ></span>
                            )}
                        </label>
                    }
                </div>
            ))}
        </RadioGroup>
    );
};

export default ColorSelector;
