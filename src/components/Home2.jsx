import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Logo } from "../components"; // Replace with your actual components
import { useSelector } from "react-redux";

function Home() {
    const userData = useSelector((status) => status.auth.userData);
    const name = userData ? userData?.name : null;

    return (
        <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black min-h-screen text-white flex flex-col items-center">
            {/* Main content section */}
            <main className="py-20 flex-1 w-full">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="text-5xl font-extrabold mb-8 animate-fade-in tracking-wide">
                            Welcome <span className="text-teal-400">{userData?.name}</span>
                        </div>
                        <p className="text-xl mb-10 leading-relaxed">
                            Welcome back! Dive into the latest posts or share your own story
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link to="/all-posts">
                                <Button
                                    bgColor="bg-indigo-600"
                                    textColor="text-white"
                                    className="transition duration-300 transform hover:scale-105 hover:bg-indigo-800 shadow-lg rounded-full px-8 py-3"
                                >
                                    Explore Posts
                                </Button>
                            </Link>
                            <Link to="/add-post">
                                <Button
                                    bgColor="bg-green-600"
                                    textColor="text-white"
                                    className="transition duration-300 transform hover:scale-105 hover:bg-green-700 shadow-lg rounded-full px-8 py-3"
                                >
                                    Add a Post
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </main>

            {/* Additional content */}
            <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 w-full">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8 text-white">Why Choose Us?</h2>
                        <p className="text-lg mb-10 leading-relaxed text-gray-300">
                            Discover why thousands of writers and readers love using our platform.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link to="/features">
                                <Button
                                    bgColor="bg-blue-600"
                                    textColor="text-white"
                                    className="transition duration-300 transform hover:scale-105 hover:bg-blue-700 shadow-lg rounded-full px-8 py-3"
                                >
                                    Features
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button
                                    bgColor="bg-red-500"
                                    textColor="text-white"
                                    className="transition duration-300 transform hover:scale-105 hover:bg-red-600 shadow-lg rounded-full px-8 py-3"
                                >
                                    About
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Feedback Button */}
            <div className="py-10 flex justify-center w-full bg-gradient-to-b from-gray-900 to-gray-800">
                <Link to="/contact">
                    <Button
                        bgColor="bg-purple-600"
                        textColor="text-white"
                        className="transition duration-300 transform hover:scale-105 hover:bg-purple-700 shadow-lg rounded-full px-8 py-3"
                    >
                        Give Us Feedback
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;