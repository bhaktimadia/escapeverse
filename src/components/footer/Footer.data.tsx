import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaLinkedinIn,
    FaInstagram,
} from 'react-icons/fa';
import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiClock,
} from 'react-icons/fi';

export const socialIcons = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaYoutube />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
];

export const rooms = [
    'Lost in Space',
    'The Lost Realm: Eldora',
    'Earthquake: Final Tremor',
    'Eclipse Express',
    'The Fear Extraction Lab',
];

export const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Book Now', href: '/book' },
    { name: 'Events & Corporates', href: '/events' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Gallery', href: '/gallery' },
];

export const contactInfo = [
    { icon: <FiPhone className="text-[#9000FF] mt-1" />, text: '8169227441' },
    { icon: <FiMail className="text-[#9000FF] mt-1" />, text: 'bookings@escapeverse.com' },
    {
        icon: <FiMapPin className="text-[#9000FF] mt-1" />,
        text: '202, Shobha Apartment, Tambe Nagar, Mulund West, Mumbai 400080, Maharashtra, India',
    },
    { icon: <FiClock className="text-[#9000FF] mt-1" />, text: '11.00 am to 11.00 pm' },
];
