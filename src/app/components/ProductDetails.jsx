import React, { useEffect, useState } from "react";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import Counter from "./Counter";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import { AiOutlineLoading } from "react-icons/ai";
import Image from "next/image";

const baseURL = "https://raw.githubusercontent.com/jaberamin9/Product---Detail/refs/heads/main";

const ProductDetails = ({ onAddToCart }) => {
    const [selectedColor, setSelectedColor] = useState("purple");
    const [selectedSize, setSelectedSize] = useState({ size: "S", price: 69 });
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 640);

    const imageUrl = `${baseURL}/assets/${selectedColor}.jpg`;

    const handleAddToCart = () => {
        onAddToCart({ color: selectedColor, size: selectedSize, quantity });
    };

    const handleResize = () => {
        setIsMobileView(window.innerWidth <= 640);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="max-w-[1300px] flex flex-col sm:flex-row items-center justify-center bg-white rounded-lg gap-[20px] md:gap-[30px] lg:gap-[60px]">
            <div className="flex-1 flex justify-end relative h-[400px] sm:h-[500px] lg:h-[600px]">
                {isLoading && (
                    <div className="absolute w-full h-full flex justify-center items-center max-w-[600px] bg-gray-100 rounded-[4px]">
                        <AiOutlineLoading className="text-[#6576FF] animate-spin text-4xl" />
                    </div>
                )}
                {isMobileView ?
                    <img
                        src={imageUrl}
                        alt={`Smart-Watch-${selectedColor}`}
                        className={`object-cover w-full rounded-[4px] max-w-[600px] transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
                        onLoad={() => setIsLoading(false)}
                        onError={() => setIsLoading(false)}
                    />
                    :
                    <Image
                        src={imageUrl}
                        alt={`Smart-Watch-${selectedColor}`}
                        className={`object-cover w-full rounded-[4px] max-w-[600px] transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
                        onLoad={() => setIsLoading(false)}
                        onError={() => setIsLoading(false)}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true}
                    />}
            </div>
            <div className="flex-1 mb-20 sm:mb-0">
                <h1 className="text-[28px] md:text-[30px] lg:text-[40px] font-bold leading-[30px] md:leading-[44px] tracking-[-1.2px] text-[#364A63]">
                    Classy Modern Smart Watch
                </h1>
                <div className="flex gap-1 pt-[10px] lg:pt-[20px]">
                    <FaStar color="#FFD200" className="w-[16px] lg:w-[18px]" />
                    <FaStar color="#FFD200" className="w-[16px] lg:w-[18px]" />
                    <FaStar color="#FFD200" className="w-[16px] lg:w-[18px]" />
                    <FaStarHalfAlt color="#FFD200" className="w-[16px] lg:w-[18px]" />
                    <FaRegStar color="#FFD200" className="w-[16px] lg:w-[18px]" />
                    <span className="leading-[23.1px] text-[12px] lg:text-[14px] text-[#8091A7]">(2 Reviews)</span>
                </div>
                <div className="pt-[10px]">
                    <span className="text-[#8091A7] text-[16px] lg:text-[20px] line-through">
                        $99.00
                    </span>
                    <span className="text-[#6576FF] text-[18px] lg:text-[24px] font-bold" style={{ textDecoration: "none" }}>
                        {" "}
                        $79.00
                    </span>
                </div>
                <p className="pt-[10px] text-[#8091A7] text-[14px] lg:text-[18px] leading-[24px]">
                    I must explain to you how all this mistaken idea of denoun cing ple
                    praising pain was born and I will give you a complete account of the
                    system, and expound the actual teaching.
                </p>
                <div className="pt-[10px] items-center gap-10 hidden md:flex">
                    <div>
                        <p className="text-[#8091A7] leading-[23.1px] text-[12px] lg:text-[14px]">Type</p>
                        <p className="text-[#364A63] leading-[23px] text-[14px] lg:text-[16px] font-bold">
                            Watch
                        </p>
                    </div>
                    <div>
                        <p className="text-[#8091A7] leading-[23.1px] text-[12px] lg:text-[14px]">
                            Model Number
                        </p>
                        <p className="text-[#364A63] leading-[23px] text-[14px] lg:text-[16px] font-bold">
                            Forerunner 290XT
                        </p>
                    </div>
                </div>
                <div className="pt-[14px]">
                    <p className="pb-[8px] text-[#364A63] leading-[20px] text-[14px] lg:text-[18px] font-bold">
                        Band Color
                    </p>
                    <ColorSelector
                        selectedColor={selectedColor}
                        onChange={setSelectedColor}
                        setIsLoading={setIsLoading}
                    />
                </div>
                <div className="pt-[20px]">
                    <p className="pb-[8px] text-[#364A63] leading-[20px] text-[14px] lg:text-[18px] font-bold">
                        Wrist Size
                    </p>
                    <SizeSelector selectedSize={selectedSize} onChange={setSelectedSize} />
                </div>
                {isMobileView ?
                    <div className="bg-white py-[10px] border-t-[1px] border-[#DBDFEA] flex items-center justify-between gap-3 w-full fixed bottom-0 pr-8">
                        <div className="flex-1">
                            <Counter quantity={quantity} onChange={setQuantity} isMobileView={isMobileView} />
                        </div>
                        <Button
                            className="bg-[#6576FF] font-bold text-white flex-1 h-[44px] rounded-[3px] hover:bg-[#6577ffd0]"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>
                    </div>
                    : <div className="my-4 flex items-center gap-3">
                        <div>
                            <Counter quantity={quantity} onChange={setQuantity} isMobileView={isMobileView} />
                        </div>
                        <Button
                            className="bg-[#6576FF] font-bold text-white w-[105px] h-[36px] rounded-[3px] hover:bg-[#6577ffd0]"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>
                        <CiHeart color="#6576FF" size={19} strokeWidth={1} />
                    </div>
                }
            </div>
        </div>
    );
};

export default ProductDetails;
