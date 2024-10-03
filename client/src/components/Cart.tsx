import { Minus, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";
import { useState } from "react";
import CheckoutConfirmPage from "./CheckoutConfirmPage";

const Cart = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-col max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end mb-4">
                <Button variant="link">Clear All</Button>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[10%] sm:w-[15%] lg:w-[10%]">Item</TableHead>
                            <TableHead className="w-[25%] sm:w-[30%] lg:w-[25%]">Title</TableHead>
                            <TableHead className="w-[15%] text-center">Price</TableHead>
                            <TableHead className="w-[20%] text-center">Quantity</TableHead>
                            <TableHead className="w-[15%] text-center">Total</TableHead>
                            <TableHead className="text-right w-[15%]">Remove</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Avatar>
                                    <AvatarImage src="" alt="" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </TableCell>
                            <TableCell className="text-left">
                                Mutton Biryani
                            </TableCell>
                            <TableCell className="text-center">399</TableCell>
                            <TableCell className="text-center">
                                <div className="flex justify-center items-center space-x-2 rounded-full border border-gray-100 dark:border-gray-800 shadow-md p-1">
                                    <Button
                                        size={"icon"}
                                        variant={"outline"}
                                        className="rounded-full bg-gray-200">
                                        <Minus />
                                    </Button>
                                    <span className="font-bold px-4">1</span>
                                    <Button
                                        size={"icon"}
                                        className="rounded-full bg-orange hover:bg-hoverOrange"
                                        variant={"outline"}>
                                        <Plus />
                                    </Button>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">₹399</TableCell>
                            <TableCell className="text-right">
                                <Button size={"sm"} className="bg-orange hover:bg-hoverOrange">
                                    Remove
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow className="text-2xl font-bold">
                            <TableCell colSpan={5}>Total</TableCell>
                            <TableCell className="text-right">399</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
            <div className="flex justify-end my-5">
                <Button
                    onClick={() => setOpen(true)}
                    className="bg-orange hover:bg-hoverOrange">
                    Proceed To Checkout
                </Button>
            </div>
            <CheckoutConfirmPage open={open} setOpen={setOpen} />
        </div>
    );
};

export default Cart;
