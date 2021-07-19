import React from 'react'
import Image from 'next/image'
import { IProduct } from '~/data'

const ProjectItem: React.FC<IProduct> = ({ icon, title }) => {
  return (
    <div className="rounded-xl shadow-xl">
      <div className="flex flex-col items-center mt-6">
        <h1 className="font-extrabold text-3xl">{title}</h1>
        <p className="ml-10 leading-none font-extralight ">Element</p>
      </div>
      <div className="relative h-[270px] w-[270px]">
        <Image
          src={icon}
          layout="fill"
          className="inset-0 h-full w-full"
          objectFit="fill"
          alt={icon}
        />
      </div>
    </div>
  )
}

export default ProjectItem
