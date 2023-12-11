import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { Github, Twitter } from 'lucide-react'; // Importing Lucide icons
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full p-4 border-t bg-gray-300'>
      <div className="md:max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <Logo />
        
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end md:flex-1 mt-4 md:mt-0">
          <Button size='sm' variant='ghost'>
            Privacy Policy
          </Button>
          <Button size='sm' variant='ghost'>
            Terms of Service
          </Button>
       
        </div>
        <div>
          <p className="text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} DevKit. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
