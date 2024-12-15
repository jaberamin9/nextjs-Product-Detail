import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area"

const baseURL = "https://raw.githubusercontent.com/jaberamin9/Product---Detail/refs/heads/main";


const CartModal = ({ cart }) => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 640);

    const handleResize = () => {
        setIsMobileView(window.innerWidth <= 640);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const renderDesktopView = () => {
        let totalQuantity = 0;
        let totalPrice = 0.0;

        return (
            <ScrollArea className="max-h-[60vh] pr-2">
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className="sticky top-0 bg-white border-b border-[#DBDFEA]">
                            <th className="text-[#8091A7] font-normal text-[14px] leading-[23.1px] py-2 text-left">Item</th>
                            <th className="text-[#8091A7] font-normal text-[14px] leading-[23.1px] py-2">Color</th>
                            <th className="text-[#8091A7] font-normal text-[14px] leading-[23.1px] py-2">Size</th>
                            <th className="text-[#8091A7] font-normal text-[14px] leading-[23.1px] py-2">Quantity</th>
                            <th className="text-[#8091A7] font-normal text-[14px] leading-[23.1px] py-2 text-right">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(cart).map(([key, value]) => {
                            totalQuantity += value.quantity;
                            totalPrice += value.quantity * value.size.price;
                            return (
                                <tr key={key} className="border-b border-[#DBDFEA] cursor-pointer hover:bg-[#DBDFEA]">
                                    <td className="py-2 flex items-center gap-2">
                                        <Image
                                            src={`${baseURL}/assets/${value.color}.jpg`}
                                            alt={key}
                                            className="rounded-[3px]"
                                            width={36}
                                            height={36}
                                            quality={50}
                                        />
                                        <span className="text-[#364A63] font-normal text-[14px] leading-[23.1px]">Classy Modern Smart Watch</span>
                                    </td>
                                    <td className="py-2 text-[#364A63] font-normal text-[14px] leading-[23.1px] text-center capitalize">{value.color}</td>
                                    <td className="py-2 text-[#364A63] font-bold text-[14px] leading-[23.1px] text-center">{value.size.size}</td>
                                    <td className="py-2 text-[#364A63] font-bold text-[14px] leading-[23.1px] text-center">{value.quantity}</td>
                                    <td className="py-2 text-[#364A63] font-bold text-[14px] leading-[23.1px] text-right">${value.size.price}</td>
                                </tr>
                            );
                        })}
                        <tr className="sticky bottom-0 bg-white">
                            <td className="py-2 text-[#373737] font-bold text-[16px] leading-[22px] tracking-[-0.2px]">Total</td>
                            <td></td>
                            <td></td>
                            <td className="py-2 text-[#364A63] font-bold text-[14px] leading-[34px] tracking-[-0.2px] text-center">{totalQuantity}</td>
                            <td className="py-2 text-[#364A63] font-bold text-[18px] leading-[34px] tracking-[-0.2px] text-right">${totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </ScrollArea>
        );
    };
    const renderMobileView = () => {
        let totalQuantity = 0;
        let totalPrice = 0.0;

        return (
            <div>
                <ScrollArea className="max-h-[60vh] overflow-y-auto scrollbar-none">
                    {Object.entries(cart).map(([key, value]) => {
                        totalQuantity += value.quantity;
                        totalPrice += value.quantity * value.size.price;

                        return (
                            <div key={key} className="flex justify-between items-center p-4 bg-gray-100 mb-3 rounded-md">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={`${baseURL}/assets/${value.color}.jpg`}
                                        alt={key}
                                        className="rounded-[3px]"
                                        width={36}
                                        height={36}
                                        quality={50}
                                    />
                                    <div>
                                        <p className="font-bold text-gray-800">Smart Watch</p>
                                        <p className="text-sm text-gray-500">
                                            Color: <span className="font-bold capitalize">{value.color}</span> - Size:{" "}
                                            <span className="font-bold">{value.size.size}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500">Qnt: {value.quantity}</p>
                                    <p className="font-bold">${value.size.price}</p>
                                </div>
                            </div>
                        );
                    })}
                </ScrollArea>
                <div className="flex justify-between items-center mt-4">
                    <p className="font-bold text-gray-800">Total</p>
                    <div>
                        <p className="text-sm text-gray-500 text-end">${totalQuantity}</p>
                        <p className="font-bold">${totalPrice}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                {isMobileView ? <Button
                    className="font-bold text-[10px] sm:text-[14px] leading-[20px] tracking-[0.26px] fixed bottom-20 sm:bottom-5 right-3 sm:right-auto bg-[#FFBB5A] hover:bg-[#ffba5ac7] text-[#364A63] px-1 sm:px-2 py-1 sm:py-2 w-[100px] sm:w-[139px] h-[30px] sm:h-[42px] rounded-full"
                >
                    Checkout <span className="bg-white w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] rounded-[5px] flex justify-center items-center">{Object.keys(cart).length}</span>
                </Button> :
                    <Button
                        className="font-bold text-[10px] sm:text-[14px] leading-[20px] tracking-[0.26px] fixed bottom-5 bg-[#FFBB5A] hover:bg-[#ffba5ac7] text-[#364A63] px-1 sm:px-2 py-1 sm:py-2 w-[100px] sm:w-[139px] h-[30px] sm:h-[42px] rounded-full"
                    >
                        Checkout <span className="bg-white w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] rounded-[5px] flex justify-center items-center">{Object.keys(cart).length}</span>
                    </Button>}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[650px] !rounded-[8px] sm:!rounded-[16px] p-4 sm:!p-11">
                <DialogHeader className="hidden">
                    <DialogTitle ></DialogTitle>
                </DialogHeader>
                <h1 className="text-[#364A63] font-bold text-[22px] leading-[24px]">Your Cart</h1>
                {isMobileView ? renderMobileView() : renderDesktopView()}
                <DialogFooter>
                    <div className="flex justify-end items-center gap-3">
                        <Button className="bg-white hover:bg-[#f4f4f4] text-[#364A63] border-[1px] border-[#DBDFEA] rounded-[3px] w-[152px] h-[36px] font-bold text-[13px] leading-[20px] tracking-[0.26px]">Continue Shopping</Button>
                        <Button className="bg-[#6576FF] hover:bg-[#6577ffce] rounded-[3px] w-[94px] h-[36px] font-bold text-[13px] leading-[20px] tracking-[0.26px]">Checkout</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CartModal;
