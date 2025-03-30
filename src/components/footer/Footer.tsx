import Link from 'next/link';

import '@fontsource/eater';
import './Footer.css';
import { contactInfo, quickLinks, rooms, socialIcons } from './Footer.data';


export default function Footer() {
    return (
        <footer className=" text-white w-full border-t border-[#9000FF] ">
            {/* Top Section */}
            <div
                className="grid grid-cols-1 md:grid-cols-4 gap-10 py-6  border-b border-[#9000FF] px-20"
                data-aos="fade-up"
            >
                {/* Logo + Social */}
                <div data-aos="fade-up" data-aos-delay="100">
                    <h1 className="text-3xl font-bold">Logo</h1>
                    <p className="mt-4 text-lg leading-tight tag-line">
                        UNLOCK THE ADVENTURE,<br />ESCAPE THE ORDINARY!
                    </p>
                    <div className="flex gap-4 mt-6">
                        {socialIcons.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="bg-white text-black p-2 rounded-full transition-all duration-300 ease-in-out transform hover:bg-[#9000FF] hover:text-white hover:scale-110"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Rooms */}
                <div data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-xl font-bold mb-4">Rooms</h3>
                    <ul className="space-y-3 text-xs font-normal">
                        {rooms.map((room, index) => (
                            <li key={index}>
                                <Link href={`/rooms/${room.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                                    <span className="cursor-pointer transition-colors duration-300 hover:text-[#9000FF]">
                                        {room}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div data-aos="fade-up" data-aos-delay="300">
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-xs font-normal">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href}>
                                    <span className="cursor-pointer transition-colors duration-300 hover:text-[#9000FF]">
                                        {link.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div data-aos="fade-up" data-aos-delay="400">
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-xs font-normal">
                        {contactInfo.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                {item.icon}
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            {/* Bottom Bar */}
            <div
                className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 py-4 px-20"
            >
                {/* bottom Wrapper */}

                <div className="flex gap-6 mb-2 md:mb-0">
                    <Link href="/privacy-policy">
                        <span className="hover:text-[#9000FF] transition-colors duration-300">
                            Privacy Policy
                        </span>
                    </Link>
                    <Link href="/terms">
                        <span className="hover:text-[#9000FF] transition-colors duration-300">
                            Terms & Conditions
                        </span>
                    </Link>
                </div>
                <p>© 2025 Escapeverse. All Rights Reserved</p>
            </div>
        </footer >
    );
}