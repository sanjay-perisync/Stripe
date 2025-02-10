import React from "react";

function Header() {
    return (

        <div>
            <header className="relative z-10 flex justify-between items-center px-8 py-4 text-white mx-auto max-w-6xl text-lg font-bold">

                {/* Left Side */}
                <div className="flex gap-5 items-center ">

                    <div>
                        <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25" class=" ">
                            <title>Stripe logo</title>
                            <path fill="#ffffff" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" fill-rule="evenodd"></path>
                        </svg>
                    </div>

                    <nav className="hidden lg:flex space-x-6">
                        <div className="flex items-center space-x-2">
                            <p>Products</p>
                            <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                <g fill-rule="evenodd">
                                    <path class="HoverArrow__linePath" d="M0 5h7" fill="#ffffff"></path>
                                    <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4" fill="#ffffff"></path>
                                </g>
                            </svg>


                        </div>
                        <div className="flex items-center space-x-2">
                            <p>Solutions</p>
                            <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                <g fill-rule="evenodd">
                                    <path class="HoverArrow__linePath" d="M0 5h7" fill="#ffffff"></path>
                                    <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4" fill="#ffffff"></path>
                                </g>
                            </svg>

                        </div>
                        <div className="flex items-center space-x-2">
                            <p>Developers</p>
                            <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                <g fill-rule="evenodd">
                                    <path class="HoverArrow__linePath" d="M0 5h7" fill="#ffffff"></path>
                                    <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4" fill="#ffffff"></path>
                                </g>
                            </svg>

                        </div>
                        <div className="flex items-center space-x-2">
                            <p>Resources</p>
                            <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                <g fill-rule="evenodd">
                                    <path class="HoverArrow__linePath" d="M0 5h7" fill="#ffffff"></path>
                                    <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4" fill="#ffffff"></path>
                                </g>
                            </svg>

                        </div>
                        <p>Pricing</p>
                    </nav>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-6">
                    <div className="hidden lg:flex items-center space-x-2">
                        <p>Sign in</p>
                        <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                            <g fill-rule="evenodd">
                                <path class="HoverArrow__linePath" d="M0 5h7" fill="#ffffff"></path>
                                <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4" fill="#ffffff"></path>
                            </g>
                        </svg>

                    </div>
                    <button className="bg-white px-4 py-2 rounded-full hidden lg:flex font-medium text-lg items-center gap-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-600">
                            Contact Sales
                        </span>
                        <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                            <defs>
                                <linearGradient id="gradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            <g fill-rule="evenodd">
                                <path className="HoverArrow__linePath" d="M0 5h7" fill="url(#gradientPurple)"></path>
                                <path className="HoverArrow__tipPath" d="M1 1l4 4-4 4" fill="url(#gradientPurple)"></path>
                            </g>
                        </svg>

                    </button>

                    <div className="flex lg:hidden">
                        <img src="https://cdn-icons-png.flaticon.com/512/6015/6015685.png" alt="" className="w-6 h-6 invert-[100%]"></img>
                    </div>

                </div>

            </header>
        </div>
    );
}

export default Header;
