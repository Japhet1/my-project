//import ScrollToTop from './ScrollToTop'
import { BsTelephoneFill, BsWhatsapp, BsEnvelopeAtFill } from "react-icons/bs";

const Contact = ({ contactData }) => {
  return (
    <main id="contact" className="font-rajdhani p-10 md:mx-10 lg:mx-20">
        <div>
            <h1 className="text-orange-500 text-3xl md:text-4xl lg:text-5xl font-bold">Contact</h1>
        </div>
        <div className="lg:flex md:flex md:flex-wrap justify-center items-center md:gap-4 lg:space-x-20 pt-16">
            {contactData.map((contact, index) => (
                <div key={index} className="flex items-center md:gap-2 lg:gap-4">
                    <div className="lg:rounded-full lg:w-20 md:text-2xl lg:text-4xl p-5 lg:border lg:border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white lg:dark:bg-orange-500 md:dark:text-orange-500 lg:dark:text-white">
                        {contact.name === "phone" ? <BsTelephoneFill/>
                            : contact.name === "whatsapp" ? <BsWhatsapp/>
                            : contact.name === "mail" ? <BsEnvelopeAtFill/>
                            : ""
                        } 
                    </div>
                    <span className="md:text-xl lg:text-2xl dark:text-white">{contact.content}</span>
                </div>
            ))}        
        </div>
    </main>
  )
}

export default Contact