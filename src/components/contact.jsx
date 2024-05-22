//import ScrollToTop from './ScrollToTop'
import { BsTelephoneFill, BsWhatsapp, BsEnvelopeAtFill } from "react-icons/bs";
import { BsInstagram, BsTwitter, BsLinkedin, BsTiktok } from "react-icons/bs";

const Contact = ({ contactData, navData }) => {
  return (
    <main id="contact" className=" footer footer-center py-10 text-3xl md:text-4xl lg:text-lg bg-[#003285] dark:bg-slate-800  text-white">
        {/* <div>
            <h1 className="text-black text-3xl md:text-4xl lg:text-6xl font-bold dark:text-white">Contact</h1>
        </div> */}
        {/* <div className="lg:flex md:flex md:flex-wrap justify-center items-center md:gap-4 lg:space-x-20 pt-16">
            {contactData.map((contact, index) => (
                <div key={index} className="flex items-center md:gap-2 lg:gap-2">
                    <div className="text-xl lg:w-20 md:text-2xl lg:text-4xl p-5 text-black dark:text-white">
                        {contact.name === "phone" ? <BsTelephoneFill/>
                            : contact.name === "whatsapp" ? <BsWhatsapp/>
                            : contact.name === "mail" ? <BsEnvelopeAtFill/>
                            : ""
                        } 
                    </div>
                    <span className="text-lg md:text-xl lg:text-2xl text-black font-normal dark:text-white">{contact.content}</span>
                </div>
            ))}        
        </div> */}

        <footer className="">
            {/* <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>  */}
            <nav className="grid grid-flow-col text-lg md:text-xl lg:text-xl md:gap-5">
                {navData.menu.map((menu, index) => <a key={index} href={menu.href} className="link link-hover"><h1>{menu.link}</h1></a>)} 
            </nav>
            <nav className="flex justify-center items-center my-3 p-5">
                <div className="lg:flex md:flex md:flex-wrap md:gap-4  px-8 border-r">
                    {contactData.map((contact, index) => (
                        <div key={index} className="flex md:gap-2">
                            <div className="text-xl md:text-2xl lg:text-2xl px-3 text-white dark:text-white">
                                {contact.name === "phone" ? <BsTelephoneFill/>
                                    : contact.name === "whatsapp" ? <BsWhatsapp/>
                                    : contact.name === "mail" ? <BsEnvelopeAtFill/>
                                    : ""
                                } 
                            </div>
                            <span className="text-lg md:text-xl lg:text-xl text-white font-normal dark:text-white">{contact.content}</span>
                        </div>
                    ))}        
                </div>
                <div className="flex justify-center items-center text-xl md:text-2xl lg:text-xl gap-5 p-5">
                    <h1>Follow</h1>
                    <a href="/"><BsTiktok/></a>
                    <a href="/"><BsInstagram/></a>
                    <a href="/"><BsTwitter/></a>
                    <a href="/"><BsLinkedin/></a>
                </div>
            </nav> 
            <aside className="text-lg md:text-xl lg:text-xl">
                <p>Copyright © 2024 - All right reserved by Gunstein.dev</p>
            </aside>
        </footer>
    </main>
  )
}

export default Contact