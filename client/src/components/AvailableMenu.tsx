import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const AvailableMenu = () => {

    return (
        <div className="md:p-4">
            <h1 className="text-xl md:text-2xl font-extrabold mb-6">
                Available Menus
            </h1>
            <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
                <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
                    <img src="https://img.freepik.com/free-photo/plate-biryani-with-bowl-rice-bowl-food-table_505751-3814.jpg?t=st=1727634111~exp=1727637711~hmac=3db420dab4ff3966c9eb99b5e522dcca42c787f1136af0433981797b937d67ba&w=1060"
                        alt="res_image" className="w-full h-40 object-cover" />
                    <CardContent className="p-4">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                            Mutton Biryani
                        </h2>
                        <p className="text-sm text-gray-600 mt-2">Mutton Biryani is a fragrant and flavorful rice dish made with tender mutton marinated in aromatic spices, layered with long-grain basmati rice, and cooked to perfection. Each bite offers a rich blend of spices and succulent meat, served with a side of cooling raita for a complete dining experience.</p>
                        <h3 className="text-lg font-semibold mt-4">
                            Price: <span className="text-[#D19254]">₹ 399</span>
                        </h3>
                    </CardContent>
                    <CardFooter className="p-4">
                        <Button className="w-full bg-orange hover:bg-hoverOrange">
                            Add to Cart
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default AvailableMenu;
