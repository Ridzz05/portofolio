import React from 'react'

function BaseLayout({children,className=""}) {
  return (
    <div className={`w-full h-full inline-block z-0 p-32 xl:p-24 lg:p-16 md:p-12 sm:p-5 ${className} bg-black`}>
        {children}
    </div>
  )
}

export default BaseLayout