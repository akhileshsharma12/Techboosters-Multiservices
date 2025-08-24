"use client";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative bg-white overflow-hidden">
            {/* Hero Content */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 pt-24 mb-48">
                {/* Left Text */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                        Empowering <br />
                        <span className="text-orange-600">Businesses Through</span> <br />
                        Digital Solutions
                    </h1>
                    <p className="mt-4 text-gray-600 text-base sm:text-lg">
                        Techboosters Multiservices is your trusted partner for digital
                        transformation. We offer IT solutions, including web & app
                        development, digital marketing, and ERP systems, tailored for
                        startups, SMEs, and enterprises.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-orange-500 text-white px-6 py-3  rounded-lg shadow-md hover:bg-orange-600 transition cursor-pointer" style={{ cursor: 'pointer' }}>
                            Explore Our Services
                        </button>
                        <button className="border border-gray-400 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <Image
                        src="/images/hero-illustration.svg"
                        alt="Tech Illustration"
                        width={500}
                        height={400}
                        className="w-full max-w-[350px] md:max-w-[500px] drop-shadow-lg"
                    />
                </div>
            </div>

            {/* SVG Wave Shape */}
            <div className="absolute bottom-0 left-0 w-full ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 270"
                    className="w-full h-auto"
                >
                    <path
                        fill="#ea580c"
                        fillOpacity="1"
                        d="M0,96L40,128C80,160,160,224,240,234.7C320,245,400,203,480,192C560,181,640,203,720,181.3C800,160,880,96,960,96C1040,96,1120,160,1200,181.3C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    />
                </svg>
            </div>
        </section>
    );
}
