//import ScrollToTop from './ScrollToTop'
import { BsTelephoneFill, BsWhatsapp, BsEnvelopeAtFill } from "react-icons/bs";

const Contact = ({ contactData }) => {
  return (
    <main className="font-rajdhani p-10 py-10 mx-20">
        <div>
            <h1 className="text-orange-500 text-5xl font-bold">Contact</h1>
        </div>
        <div className="flex justify-center items-center gap-10 pt-16">
            <div className="flex items-center gap-4">
                <div className="rounded-full w-20 text-4xl p-5 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white dark:bg-orange-500 dark:text-white"><BsTelephoneFill/></div>
                <span className="text-2xl dark:text-white">{contactData.phone}</span>
            </div>

            <div className="flex items-center gap-4">
                <div className="rounded-full w-20 text-4xl p-5 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white dark:bg-orange-500 dark:text-white"><BsWhatsapp/></div>
                <span className="text-2xl dark:text-white">{contactData.whatsapp}</span>
            </div>

            <div className="flex items-center gap-4">
                <div className="rounded-full w-20 text-4xl p-5 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white dark:bg-orange-500 dark:text-white"><BsEnvelopeAtFill/></div>
                <span className="text-2xl dark:text-white">{contactData.mail}</span>
            </div>
            
        </div>
       

    </main>
  )
}

export default Contact