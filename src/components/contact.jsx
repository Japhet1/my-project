//import ScrollToTop from './ScrollToTop'
import { BsTelephoneFill, BsWhatsapp, BsEnvelopeAtFill } from "react-icons/bs";

const Contact = ({ contactData }) => {
  return (
    <main id="contact" className="p-10 md:mx-10 scroll-smooth bg-yellow-500 dark:bg-yellow-700 rounded-xl">
        <div>
            <h1 className="text-black text-3xl md:text-4xl lg:text-6xl font-bold dark:text-white">Contact</h1>
        </div>
        <div className="lg:flex md:flex md:flex-wrap justify-center items-center md:gap-4 lg:space-x-20 pt-16">
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
        </div>
    </main>
  )
}

export default Contact