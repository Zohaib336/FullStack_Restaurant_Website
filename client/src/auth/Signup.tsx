import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { userSignupSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail, PhoneIcon, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

// There are two methods of define type in typescript

type SignupInputState = {
    fullname: string;
    email: string;
    password: string;
    contact: string;
}

const Signup = () => {
    const [input, setInput] = useState<SignupInputState>({
        fullname: "",
        email: "",
        password: "",
        contact: "",
    });

    const [errors, setErrors] = useState<Partial<SignupInputState>>({});

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const loginSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        // Form validation
        const result = userSignupSchema.safeParse(input);
        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<SignupInputState>);
            return;
        }
        console.log(input);
        // login api implementation start here
        // try {
        //     await signup(input);
        //     navigate("/verify-email");
        // } catch (error) {
        //     console.log(error);
        // }
    }
    const loading = false;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">BiteMate</h1>
                </div>

                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Enter your full name"
                            name="fullname"
                            value={input.fullname}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {errors && <span className="text-xs text-red-500">{errors.fullname}</span>}
                    </div>
                </div>

                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {errors && <span className="text-xs text-red-500">{errors.email}</span>}
                    </div>
                </div>

                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="password"
                            placeholder="Create a strong password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {errors && <span className="text-xs text-red-500">{errors.password}</span>}
                    </div>
                </div>

                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Contact"
                            name="contact"
                            value={input.contact}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <PhoneIcon className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {errors && <span className="text-xs text-red-500">{errors.contact}</span>}
                    </div>
                </div>

                <div className="mb-10">
                    {loading ? (
                        <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            className="w-full bg-orange hover:bg-hoverOrange">
                            Signup
                        </Button>
                    )}
                </div>
                <Separator />
                <p className="mt-2">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500">Login</Link>
                </p>
            </form>
        </div>
    )
}

export default Signup