import React from 'react'
import Link from 'next/link'
import Logo from '../../../../public/Kubota_Logo.svg.png'
import Image from 'next/image'

import { signOut } from 'next-auth/react'

function AdminNav({session}) {
  return (
    <nav className='shadow-xl'>
        <div className='container mx-auto'>
            <div className="flex justify-between items-center p-4 bg-teal-100">
                <div>
                    <Link href="/">
                        <Image src={Logo} width={100} height={100} alt='NextJS Logo'/>
                    </Link>
                </div>
                <ul className='flex'>
                    {!session ?(
                        <>
                        <li className='mx-3'><Link href="/login" className='hover:underline'>Login</Link></li>
                        <li className='mx-3'><Link href="/register" className='hover:underline'>Register</Link></li>
                        </>
                    ) : (
                        <li className='mx-3'> 
                            <a onClick={()=> signOut()} className='bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2'>Logout</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </nav>  
  )
}

export default AdminNav
