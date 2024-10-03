import { Dispatch, SetStateAction, useState, FormEvent } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog"; // Consolidated imports
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";

const CheckoutConfirmPage = ({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}) => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
        city: "",
        country: "",
    });

    const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const checkoutHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(input);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogTitle className="font-semibold">Review Your Order</DialogTitle>
                <DialogDescription className="text-xs">
                    Please review your delivery details carefully to make sure everything is correct.
                </DialogDescription>
                <form onSubmit={checkoutHandler} className="mt-2 md:grid grid-cols-2 gap-2 space-y-1 md:space-y-0">
                    <div>
                        <Label>Full Name</Label>
                        <Input
                            className="mt-1 mb-2"
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input
                            className="mt-1 mb-2"
                            type="text"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div>
                        <Label>Contact</Label>
                        <Input
                            className="mt-1 mb-2"
                            type="text"
                            name="contact"
                            value={input.contact}
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div>
                        <Label>Address</Label>
                        <Input
                            className="mt-1 mb-2"
                            type="text"
                            name="address"
                            value={input.address}
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div>
                        <Label>City</Label>
                        <Input
                            className="mt-1 mb-2"
                            type="text"
                            name="city"
                            value={input.city}
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div>
                        <Label>Country</Label>
                        <Input
                            className="mt-1 mb-2"
                            type="text"
                            name="country"
                            value={input.country}
                            onChange={changeEventHandler}
                        />
                    </div>
                    <DialogFooter className="col-span-2 pt-5">
                        <Button className="bg-orange hover:bg-hoverOrange">
                            Continue To Payment
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CheckoutConfirmPage;
