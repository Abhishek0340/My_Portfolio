import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { useState } from 'react'
import Swal from 'sweetalert2';


const App = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "97608b1f-4fb7-45d2-9c3a-7c0477ddfefd");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        Swal.fire({
            title: "Message Sent!",
            text: "Your message has been successfully submitted.",
            icon: "success",
            confirmButtonText: "OK",
            timer: 3000,
        });

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    const [zoomedImage, setZoomedImage] = useState(null);

    const [showDetails, setShowDetails] = useState({ BSc: false, MSc: false });

    const toggleDetails = (degree) => {
        setShowDetails((prev) => ({ ...prev, [degree]: !prev[degree] }));
    };



    const Navbar_links = [
        { id: 1, label: 'About', href: '#about', },
        { id: 2, label: 'Skills', href: '#skills', },
        { id: 3, label: 'Projects', href: '#projects', },
        { id: 4, label: 'Qualification', href: '#qualification', },
        { id: 5, label: 'Contact', href: '#contact', },
    ]

    const Languages = [
        { id: 1, label: 'HTML', icon_img: ' devicon-html5-plain colored ' },
        { id: 2, label: 'CSS', icon_img: ' devicon-css3-plain colored ' },
        { id: 3, label: 'Javascript', icon_img: 'devicon-javascript-plain colored ' },
        { id: 4, label: 'React JS', icon_img: 'devicon-react-original  colored ' },
        { id: 5, label: 'Tailwind CSS', icon_img: 'devicon-tailwindcss-original  colored ' },
        { id: 6, label: 'Bootstrap', icon_img: 'devicon-bootstrap-plain colored ' },
        { id: 7, label: 'VS Code', icon_img: 'devicon-vscode-plain colored ' },
        { id: 8, label: 'Github', icon_img: 'devicon-github-plain colored ' },
        { id: 9, label: 'Git', icon_img: 'devicon-git-plain colored ' },
        { id: 9, label: 'MongoDB', icon_img: 'devicon-mongodb-plain colored colored ' }
    ]

    const Social = [
        {
            id: 1,
            label: 'LinkedIn',
            className: 'text-white transition duration-300',
            href: 'https://www.linkedin.com/in/abhishek-shinde-561279220/',
            icon: 'bi bi-linkedin'
        },
        {
            id: 2,
            label: 'Github',
            className: 'text-white transition duration-300',
            href: 'https://github.com/Abhishek0340',
            icon: 'bi bi-github'
        },
        {
            id: 3,
            label: 'Twitter',
            className: 'text-white transition duration-300',
            href: '',
            icon: 'bi bi-twitter'
        },
        {
            id: 4,
            label: 'Whatsapp',
            className: 'text-white transition duration-300',
            href: 'https://wa.me/qr/E3NF6KT6GXYTO1',
            icon: 'bi bi-whatsapp'
        },
    ]

    return (
        <>
            <div className="font-sans scroll-smooth" style={{ backgroundColor: 'white' }}>

                {/* Navbar */}
                <nav className=" text-black p-4 fixed w-full top-0 z-10 bg-neutral-100">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-xl font-semibold  cursor-pointer">My Portfolio</h1>
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className=" focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                                </svg>
                            </button>
                        </div>
                        <ul className={`md:flex space-x-6 font-semibold hidden`}>
                            {Navbar_links.map((item) => (
                                <li key={item.id}>
                                    <a href={item.href}
                                        className='hover:text-blue-500 font-semibold hover:border-b-2 hover:border-blue-300'>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {isOpen && (
                        <div className="md:hidden h-screen  p-4">
                            <ul className="flex flex-col space-y-2">
                                {Navbar_links.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.href} className={item.className}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </nav>

                {/* Main content */}
                <div className="mt-1">
                    <section className="bg-neutral-100 text-black h-[30rem] mt-14 flex flex-col justify-center items-center space-y-4">
                        <h2 className="text-5xl md:text-6xl font-bold text-center ">Hi, I'm Abhishek</h2>
                        <p className="text-2xl  font-bold text-center">I am
                            <span className="font-bold ml-3 text-blue-500">
                                <Typewriter words={['Front End Developer', 'React JS Developer']} loop={Infinity} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                            </span>
                        </p>
                        <p className="text-xl text-center text-gray-400 mb-10">
                            Building frontend applications to solve real life problems
                        </p>
                        <button id='' className="mt-10 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                            <a href="#contact">Contact Me</a>
                        </button>
                    </section>


                    {/* About Section */}
                    <section id='about' style={{ scrollMarginTop: '6rem' }} className="text-gray-800 mt-20 sm:mt-10">
                        <div className="container mx-auto px-6 lg:px-16">

                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
                                <p className="text-md mt-2 text-gray-600">My Introduction</p>
                            </div>

                            <div className="mt-12 flex flex-col md:flex-row items-center gap-10">

                                <div className="w-full md:w-1/3 flex justify-center">
                                    <img
                                        className="rounded-lg shadow-sm w-64 h-64 object-contain bg-transparent "
                                        src="./Abhishek.jpg"
                                        alt="Abhishek Shinde"
                                    />
                                </div>

                                <div className="w-full md:w-2/3 text-center md:text-left">
                                    <p className="text-lg leading-relaxed text-gray-700">
                                        I am a passionate **Full Stack Developer** with expertise in **React.js, JavaScript, HTML, CSS, and Tailwind CSS**.
                                        I have hands-on experience building robust web applications, including an **Inventory Management System** and a **Blog Platform**.
                                        I love problem-solving and continuously improving my skills in frontend and backend development.
                                    </p>

                                    <p className="mt-4 text-gray-700">
                                        I thrive in dynamic environments and enjoy collaborating on innovative projects that impact users positively.
                                    </p>

                                    <div className="mt-6">
                                        <a href="./Abhishek_Resume.pdf" download>
                                            <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
                                                Download Resume
                                            </button>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>



                    {/* Skills Section */}
                    <div id='skills' style={{ scrollMarginTop: '2rem' }} 
                    className="text-gray-900 py-16 px-4 ">
                        <h2 className="text-4xl font-bold text-center mb-20 mt-10">Skills</h2>

                        <div className='container  mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center'>
                            {Languages.map((item1, index) => (
                                <div key={index}
                                    className='flex hover:shadow-md flex-col items-center space-y-2'>
                                    <i className={`${item1.icon_img} text-5xl sm:text-7xl md:text-8xl`}></i>
                                    <p className='text-lg font-semibold'>{item1.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>


                {/* Projects Section */}
                <section id="projects" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-20 mt-10 mb-8">Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Project 1 */}
                            <div className="border p-6 rounded-lg shadow-lg flex md:flex-row flex-col items-center">
                                <img
                                    src="./kvnimg.png"
                                    alt="Krushi Vikas Nursery"
                                    className="w-full md:w-1/3 h-48 object-contain rounded-lg md:mr-6 mb-4 md:mb-0 cursor-pointer transition-transform duration-300 hover:scale-105"
                                    onClick={() => setZoomedImage("./kvnimg.png")}
                                />
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-2">Krushi Vikas Nursery Website</h3>
                                    <p>Developed an inventory management and billing system with an admin panel for effective business operations. Utilized React JS and Tailwind CSS for the frontend and implemented basic backend features.</p>
                                    <a className='mt-4 underline' href="https://kvnagro.netlify.app/" target="_blank">Live Demo Website</a>
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div className="border p-6 rounded-lg shadow-lg flex md:flex-row flex-col items-center">
                                <img
                                    src="./blogimg.png"
                                    alt="Blog Platform"
                                    className="w-full md:w-1/3 h-48 object-contain rounded-lg md:mr-6 mb-4 md:mb-0 cursor-pointer transition-transform duration-300 hover:scale-105"
                                    onClick={() => setZoomedImage("./blogimg.png")}
                                />
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-2">Blog Platform</h3>
                                    <p>Built a Markdown-based blog system featuring post creation, commenting, and an admin dashboard for managing content. Designed using React JS, Tailwind CSS, and integrated backend functionality.</p>
                                    <a className='mt-4 underline' href="" target="_blank">Live Demo Website</a>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Zoomed Image Modal */}
                    {zoomedImage && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
                            onClick={() => setZoomedImage(null)}
                        >
                            <div className="relative">
                                <img
                                    src={zoomedImage}
                                    alt="Zoomed Preview"
                                    className="w-auto h-auto max-w-[90vw] max-h-[80vh] md:max-w-4xl md:max-h-[90vh] rounded-lg shadow-2xl transition-transform duration-300"
                                />
                                <button
                                    className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-lg text-xl font-bold"
                                    onClick={() => setZoomedImage(null)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}
                </section>


                {/* Qualification Section */}
                <section id='qualification' style={{ scrollMarginTop: '2.5rem' }} className="py-16 pt-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-8 text-center mb-20 mt-10">
                            Qualifications
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                            {/* BSc Qualification Card */}
                            <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 hover:shadow-xl transition">
                                <h3 className="text-3xl font-semibold  mb-4 text-center md:text-left">
                                    Bachelor of Computer Science (BSc)
                                </h3>
                                <p className="text-gray-700 mb-2 text-center md:text-left">
                                    Shivaji University, Kolhapur
                                </p>
                                <p className="text-gray-700 mb-4 text-center md:text-left">
                                    2020 - 2023
                                </p>

                                {/* Show BSc details */}
                                {showDetails.BSc && (
                                    <div className=" rounded-lg ">
                                        <p className="text-gray-700 ">Percentage:
                                            <span className="">85%</span></p>
                                        <p className="text-gray-700 ">CGPA:
                                            <span className="">8.5</span></p>
                                    </div>
                                )}

                                <button
                                    onClick={() => toggleDetails("BSc")}
                                    className="mt-4 max-md:block m-auto bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition hover:bg-blue-400 cursor-pointer"
                                >
                                    {showDetails.BSc ? "Hide Details" : "View Details"}
                                </button>
                            </div>

                            {/* MSc Qualification Card */}
                            <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 hover:shadow-xl transition">
                                <h3 className="text-3xl font-semibold  mb-4 text-center md:text-left">
                                    Master of Computer Science (MSc)
                                </h3>
                                <p className="text-gray-700 mb-2 text-center md:text-left">
                                    Karmaveer Bhavrao Patil University, Satara
                                </p>
                                <p className="text-gray-700 mb-4 text-center md:text-left">
                                    2023 - 2025
                                </p>

                                {/* Show MSc details */}
                                {showDetails.MSc && (
                                    <div className=" rounded-lg ">
                                        <p className="text-gray-700 ">Percentage:
                                            <span className="text-gray-700">92%</span></p>
                                        <p className="text-gray-700 ">CGPA:
                                            <span className="text-gray-700">9.2</span></p>
                                    </div>
                                )}

                                <button
                                    onClick={() => toggleDetails("MSc")}
                                    className="mt-4 bg-blue-500 max-md:block m-auto text-white px-4 py-2 rounded-lg font-medium transition hover:bg-blue-400 cursor-pointer"
                                >
                                    {showDetails.MSc ? "Hide Details" : "View Details"}
                                </button>
                            </div>

                        </div>
                    </div>
                </section>


                <footer id='contact' style={{}} className="bg-neutral-500 mt-20  text-white py-10">
                    <div className="container mx-auto px-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

                            <div className='p-8'>
                                <h2 className="text-3xl font-bold">Contact Me</h2><br />
                                <form onSubmit={onSubmit} className="space-y-2">
                                    <div>
                                        <label className="block text-sm font-medium mb-2" htmlFor="name"> Name</label>
                                        <input
                                            type="text"
                                            name='name'
                                            id="name"
                                            className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2" htmlFor="email"> Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name='email'
                                            className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2" htmlFor="message"> Message</label>
                                        <textarea id="message" rows="3" name='message' className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your message" required></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"> Send Message </button>
                                </form>
                            </div>

                            <div className='p-8'>
                                <h2 className="text-3xl font-bold mb-6">Follow Me</h2>
                                <p className="text-gray-200 mb-4">
                                    Connect with me on social media and check out more of my work.
                                </p>
                                <ul className="space-y-3">
                                    {Social.map((item4, index) => (
                                        <li key={index}>
                                            <i className={item4.icon} style={{ marginRight: '10px' }}></i>
                                            <a href={item4.href} className={item4.className}>{item4.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <hr className='w-1/2 mt-4 block m-auto opacity-90 bg-gray-50 '/>

                        <div className="mt-8 text-center">
                            <p className="text-white">&copy; 2025 Abhishek. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div >
        </>
    );
}


export default App