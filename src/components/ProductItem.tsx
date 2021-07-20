import React from 'react'
import Image from 'next/image'
import { IProduct } from '~/data'

const ProjectItem: React.FC<IProduct> = ({ icon, title }) => {
  return (
    <div className="rounded-[50px] shadow-xl bg-white dark:bg-[#2B3544]">
      <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-3xl mt-4">{title}</h1>
        <p className="ml-6 md:ml-10 leading-none font-extralight ">Element</p>
      </div>
      <div className="relative h-[250px] w-[250px] md:w-[270px]">
        <Image
          src={icon}
          layout="fill"
          className="inset-0 h-full w-full"
          alt={icon}
        />
      </div>
    </div>
  )
}

export default ProjectItem
