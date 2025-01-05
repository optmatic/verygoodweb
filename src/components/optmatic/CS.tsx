import Logo from "@/images/optmatic-logo.svg";

export default function CS() {
    return (
        <div className="p-[31px] bg-deepBlue/50 border border-zinc-600/5 shadow-md shadow-black/20 flex flex-col justify-between">
                <h1 className="text-3xl text-white sm:text-4xl font-normal font-serif mb-2">We&apos;ll be right back</h1>
                <p className="text-md text-white font-light">Optmatic is getting an upgrade.</p>
                <div className="flex flex-col mt-[50px] !text-sm">
                    <a href="mailto:tom@optmatic.com" className="text-white/80 hover:text-white hover:italic">tom@optmatic.com</a>
                    <a href="https://thomaus.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white hover:italic">thomaus.com</a>
                    <a className="text-white/80 hover:text-white hover:italic" href="tel:0499992401">0499 992 401</a>
                    <img src={Logo.src} alt="Optmatic Logo" className="w-[100px] -mt-[31px] self-end" />
                </div>
        </div>
    )
}