
import { BsTelephoneFill, BsWhatsapp, BsEnvelopeAtFill } from "react-icons/bs";

const Contact = () => {
  return (
    <main className="font-bahnschrift p-10 py-10">
        <div>
            <h1 className="text-red-500 text-5xl font-bold">Contact</h1>
        </div>
        <div className="flex justify-center items-center gap-10 pt-16">
            <div className="flex items-center gap-4">
                <div className="rounded-full w-20 text-4xl p-5 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"><BsTelephoneFill/></div>
                <span className="text-2xl">+(233) 557-444-157</span>
            </div>

            <div className="flex items-center gap-4">
                <div className="rounded-full w-20 text-4xl p-5 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"><BsWhatsapp/></div>
                <span className="text-2xl">+(233) 557-444-157</span>
            </div>

            <div className="flex items-center gap-4">
                <div className="rounded-full w-20 text-4xl p-5 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"><BsEnvelopeAtFill/></div>
                <span className="text-2xl">gunstein.dev@gmail.com</span>
            </div>

        </div>
    </main>
  )
}

export default Contact