import Link from "next/link";

export default function UniverseThemeUI() {
    return (
        <div className="bg-[#0D0D0D] min-h-screen p-6 text-white">
            {/* Navbar */}
            <nav className="bg-[#0D0D0D] text-white py-4 px-6 flex justify-between items-center shadow-lg">
                <div className="text-2xl font-bold tracking-wide text-[#FFD700]">Escape Universe</div>
                <div className="space-x-6 hidden md:flex">
                    <NavItem href="/blogs" label="Blogs" />
                    <NavItem href="/rooms" label="Rooms" />
                    <NavItem href="/events" label="Events & Corporate" />
                    <NavItem href="/contact" label="Contact Us" />
                    {/* Book Now Button */}
                    <button className="bg-[#00FFFF] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#8A2BE2] transition">
                    {/* // onClick={() => router.push('/booking')} */}
                    {/* > */}
                        Book Now
                    </button>
                </div>
                {/* <button className="bg-[#00FFFF] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#8A2BE2] transition">
                    Book Now
                </button> */}
            </nav>

            {/* Hero Section */}
            <section className="p-10 text-center bg-[#6A0572] rounded-lg mt-6">
                <h1 className="text-4xl text-[#FFD700] font-bold">Embark on a Galactic Adventure</h1>
                <p className="text-lg text-gray-200 mt-2">Solve cosmic mysteries and explore the unknown.</p>
            </section>

            {/* About Us Section */}
            <section className="mt-10 p-8 bg-[#1B1B2F] rounded-lg text-center">
                <h2 className="text-3xl text-[#FFD700] font-bold">About Us</h2>
                <p className="text-gray-200 mt-4">
                    Welcome to Escape Universe, where reality bends, and adventures begin! Our themed escape rooms
                    transport you to different dimensions, testing your problem-solving skills and teamwork. Whether
                    you're deciphering ancient codes or navigating futuristic landscapes, we guarantee an unforgettable experience!
                </p>
            </section>

            {/* Room List Section */}
            <section className="mt-10 p-8 bg-[#6A0572] rounded-lg text-center">
                <h2 className="text-3xl text-[#FFD700] font-bold">Our Escape Rooms</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {[{ name: "Cosmic Labyrinth", desc: "A maze beyond the stars, can you escape?", img: "https://via.placeholder.com/200" },
                    { name: "Astral Escape", desc: "Unlock the mysteries of space-time.", img: "https://via.placeholder.com/200" },
                    { name: "Gravity Paradox", desc: "Where up is down and time is broken.", img: "https://via.placeholder.com/200" }]
                        .map((room, index) => (
                            <div key={index} className="bg-[#8A2BE2] p-6 rounded-lg shadow-lg text-center">
                                <img src={room.img} alt={room.name} className="mx-auto rounded-md mb-4" />
                                <h3 className="text-2xl text-[#FFD700] font-semibold">{room.name}</h3>
                                <p className="text-gray-200 mt-2">{room.desc}</p>
                                <button className="mt-4 bg-[#00FFFF] px-4 py-2 rounded-lg hover:bg-[#1B1B2F] transition">
                                    View More
                                </button>
                            </div>
                        ))}
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="mt-10 text-center p-8 bg-[#1B1B2F] rounded-lg">
                <h2 className="text-3xl text-[#FFD700] font-bold">What Our Adventurers Say</h2>
                <p className="text-gray-200 mt-4 italic">“An experience like no other. The puzzles were mind-blowing!”</p>
                <p className="text-gray-200 mt-2 italic">“Felt like I was actually in another universe. Highly recommend!”</p>
            </section>

            {/* FAQ Section */}
            <section className="mt-10 p-8 bg-[#6A0572] rounded-lg">
                <h2 className="text-3xl text-[#FFD700] font-bold">FAQs</h2>
                <details className="mt-4 bg-[#8A2BE2] p-4 rounded-md text-gray-200">
                    <summary className="cursor-pointer text-[#FFD700]">How long is the escape room experience?</summary>
                    <p className="mt-2">Each experience lasts about 60 minutes, plus a short briefing and debriefing.</p>
                </details>
                <details className="mt-4 bg-[#8A2BE2] p-4 rounded-md text-gray-200">
                    <summary className="cursor-pointer text-[#FFD700]">Can we play in teams?</summary>
                    <p className="mt-2">Yes! Teams of 2-6 players can participate in each escape room adventure.</p>
                </details>
            </section>

            {/* Call to Action Section */}
            <section className="mt-10 text-center p-8 bg-[#0D0D0D] border border-[#FFD700] rounded-lg">
                <h2 className="text-3xl text-[#FFD700] font-bold">Are You Ready to Escape?</h2>
                <p className="text-gray-200 mt-2">Book your adventure now and unlock the mysteries of the cosmos!</p>
                <button className="mt-4 bg-[#00FFFF] px-6 py-3 rounded-lg font-bold text-black hover:bg-[#8A2BE2] transition">
                    Book Now
                </button>
            </section>

            {/* Footer */}
            <footer className="mt-10 py-6 text-center bg-[#0D0D0D] text-gray-300">
                <p>&copy; 2025 Escape Universe. All rights reserved.</p>
            </footer>
        </div>
    );
}

function NavItem({ href, label }: any) {
    return (
        <Link href={href} passHref>
            <span className="text-lg cursor-pointer hover:text-[#FFC300] transition">
                {label}
            </span>
        </Link>
    );
}