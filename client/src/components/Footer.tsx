import React from 'react';
import logo from './ui/logo.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 md:py-8 lg:py-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 justify-between">

                    {/* Column 1 */}
                    <div className="flex flex-col items-center md:w-1/3 text-center md:text-left mt-6"> {/* Added mt-6 here */}
                        <img
                            src={logo}
                            alt="BiteMate Logo"
                            className="w-20 h-auto rounded-3xl shadow-2xl border border-gray-500 mb-4"
                        />
                        <h4 className="text-lg font-semibold mb-2">BiteMate</h4>
                        <p className="text-sm mb-4">Your Table Awaits</p>
                        <div className="flex space-x-4 mt-2 mb-6 justify-center md:justify-start">
                            <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
                            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
                            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-center md:w-1/3 text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-2">Our Location</h4>
                        <div className="mt-2 mb-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090173!2d144.9537353153161!3d-37.816279979751594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11d6e9%3A0x5045675218cee20!2s123%20Flavor%20St%2C%20Foodie%20City%2C%20FC%2045678%2C%20Australia!5e0!3m2!1sen!2sus!4v1632782261346!5m2!1sen!2sus"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-center md:w-1/3 text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-2 mt-6">Contact Us</h4> {/* Added margin-top for space */}
                        <p className="text-sm mb-4">We’re here to help!</p>
                        <div className="flex items-center mb-2">
                            <FaMapMarkerAlt className="mr-2" />
                            <p className="text-sm">123 Food Lane, Food City</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FaPhone className="mr-2" />
                            <p className="text-sm">Call: (555) 123-4567</p>
                        </div>
                        <div className="flex items-center mb-6">
                            <FaEnvelope className="mr-2" />
                            <p className="text-sm">Email: support@bitemate.com</p>
                        </div>
                    </div>
                </div>

                {/* Horizontal Line */}
                <div className="border-t border-gray-700 mt-10 pt-4 text-center">
                    <p className="text-sm">&copy; 2024 BiteMate. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
