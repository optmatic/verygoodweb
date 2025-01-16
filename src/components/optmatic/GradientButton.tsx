export default function GradientButton({ link, targetVal, text }: { link?: string, targetVal?: string, text: string }) {
    return (
        <a href={link} target={targetVal}  className="font-semibold w-full rounded-md border border-gray-900 bg-gradient-to-br from-green-400 to-blue-600 px-3 py-1.5 text-base font-medium text-white shadow-sm hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center">
            {text}
        </a>
    )
}