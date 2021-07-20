import React from 'react'

interface IconType {
  className?: string
}

export const MenuIcon: React.FC<IconType> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 44 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="3"
        y1="3"
        x2="41"
        y2="3"
        stroke="black"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="3"
        y1="18"
        x2="26"
        y2="18"
        stroke="black"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="3"
        y1="32"
        x2="26"
        y2="32"
        stroke="black"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ChevronRight: React.FC<IconType> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="3.53553"
        y1="4"
        x2="19.2188"
        y2="19.6832"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="2.5"
        y1="-2.5"
        x2="24.6794"
        y2="-2.5"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 23.2188 20)"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ChevronBottom: React.FC<IconType> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <line
          x1="2.5"
          y1="-2.5"
          x2="24.6794"
          y2="-2.5"
          transform="matrix(0.707107 0.707107 0.707107 -0.707107 4 0)"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="20"
          y1="19.6832"
          x2="35.6832"
          y2="4"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export const CloseIcon: React.FC<IconType> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.93934"
        y1="27.9393"
        x2="27.9393"
        y2="1.93934"
        stroke="white"
        strokeWidth="3"
      />
      <line
        x1="1.93934"
        y1="27.9393"
        x2="27.9393"
        y2="1.93934"
        stroke="white"
        strokeWidth="3"
      />
      <line
        x1="1.93934"
        y1="27.9393"
        x2="27.9393"
        y2="1.93934"
        stroke="white"
        strokeWidth="3"
      />
      <line
        x1="1.06066"
        y1="1.93934"
        x2="27.0607"
        y2="27.9393"
        stroke="white"
        strokeWidth="3"
      />
      <line
        x1="1.06066"
        y1="1.93934"
        x2="27.0607"
        y2="27.9393"
        stroke="white"
        strokeWidth="3"
      />
      <line
        x1="1.06066"
        y1="1.93934"
        x2="27.0607"
        y2="27.9393"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  )
}
