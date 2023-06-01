

const Workitem = ({year, title, duration, details}) => {
  return (
    <ol className="relative flex-col border-stone-200 md:flex-row border-1">
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full bg-stone-100 mt-1.5 -left-1.5 border-white" />
            <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
              <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">{ year }</span>
              <span className="text-lg font-semibold text-[#001b5e] rounded-md">{ title }</span>
              <span className="my-1 text-sm font-normal leading-none text-stone-400">{ duration }</span>
            </p>
            <p className="my-2 text-base font-normal text-stone-500">{ details }</p>
        </li>
    </ol>
  )
}

export default Workitem