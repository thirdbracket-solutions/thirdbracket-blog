'use client'

import React from 'react'
import { IoCloseOutline, IoCloseSharp } from 'react-icons/io5'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black/50 dark:bg-white/50 backdrop-blur-md justify-center   overflow-hidden">
      <div className="bg-white dark:bg-black backdrop-blur-2xl px-6 pt-20 pb-16 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-4 text-xl font-light text-primary-500  "
          aria-label="Close"
        >
          <IoCloseOutline size={40} />
        </button>
        {children}
      </div>
    </div>
  )
}
