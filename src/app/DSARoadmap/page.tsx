import React from 'react'
import Roadmap from './Roadmap'

const page = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-col flex-1 gap-5 w-full max-w-[1300px] px-4 pb-3">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold">DSA Roadmap</h1>
          <p className="font-medium text-accent-foreground">
            Navigate your data structure and algorithm journey with our DSA Roadmap.
          </p>
        </div>
        <Roadmap />
      </div>
    </div>
  )
}

export default page