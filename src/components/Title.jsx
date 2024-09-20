import React from 'react'

function Title({title}) {
  return (
    <>
        <h2 className="flex flex-row flex-nowrap items-center mt-24 mb-10 ">
            <span className="flex-grow block border-t border-[#080127]"></span>
            <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-[#080127] text-white">
              {title}
            </span>
            <span className="flex-grow block border-t border-[#080127]"></span>
          </h2>

    </>
  )
}

export default Title