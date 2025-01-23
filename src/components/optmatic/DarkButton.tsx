export default function DarkButton({ text, link, targetVal, type }: { text: string, link?: string, targetVal?: string, type?: string }) {
    const baseClasses = `relative inline-block px-4 py-2 font-medium group`
    
    return (
        <div>
            {type === 'submit' ? (
                <button 
                    type="submit" 
                    className={`${baseClasses} focus:outline-none focus:ring-2 focus:ring-blue-200`}
                >
                       <span className="absolute inset-0 w-full h-full transition duration-200 ease-out bg-optBlue/30 transform translate-x-1 translate-y-1 border-2 border-gray-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-deepBlue border-2 border-slightBlue group-hover:bg-gray-900"></span>
                    <span className="relative text-white font-semibold">
                        {text}
                    </span>
                </button>
            ) : (
                <a 
                    href={link} 
                    target={targetVal} 
                    className={`${baseClasses} focus:outline-none focus:ring-2 focus:ring-blue-200`}
                >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out bg-optBlue/30 transform translate-x-1 translate-y-1 border-2 border-gray-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-deepBlue border-2 border-slightBlue group-hover:bg-gray-900"></span>
                    <span className="relative text-white font-semibold">
                        {text}
                    </span>
                </a>
            )}
        </div>
    )
}