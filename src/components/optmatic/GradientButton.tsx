export default function GradientButton3d({ text, link, targetVal, type }: { text: string, link?: string, targetVal?: string, type?: string }) {
    const baseClasses = `relative inline-block px-4 py-2 font-medium group ${type === 'primary' ? 'bg-gradient-to-br from-green-400 to-blue-600' : ''}`
    
    return (
        <div>
            {type === 'submit' ? (
                <button 
                    type="submit" 
                    className={`${baseClasses} focus:outline-none focus:ring-2 focus:ring-blue-200`}
                >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out bg-optBlue/30 transform translate-x-1 translate-y-1 bg-lightBlue border-2 border-deepBlue group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-400 to-blue-600 border-2 border-gray-900 group-hover:bg-gradient-to-bl"></span>
                    <span className="relative text-white font-semibold">
                        {text}
                    </span>
                </button>
            ) : (
                <a 
                    href={link} 
                    target={targetVal} 
                    className={`${baseClasses} focus:outline-none`}
                >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out bg-optBlue/30 transform translate-x-1 translate-y-1 bg-lightBlue border-2 border-deepBlue group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-400 to-blue-600 border-2 border-gray-900 group-hover:bg-gradient-to-bl"></span>
                    <span className="relative text-white font-semibold">
                        {text}
                    </span>
                </a>
            )}
        </div>
    )
}