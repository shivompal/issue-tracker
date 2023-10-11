"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { AiFillBug } from "react-icons/ai"
import classnames from "classnames"

export default function NavBar() {
    const currentPath = usePathname()
    console.log(currentPath)
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues/list' }
    ]
    return (
        <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
            <Link href="/"><AiFillBug /></Link>
            <ul className="flex space-x-6">
                {
                    links.map(link =>
                        <Link
                            key={link.href}
                            href={link.href}
                            // className={`${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'}  hover:text-zinc-800 transition-colors`}
                            className={classnames({
                                'text-zinc-900': link.href === currentPath,
                                'text-zinc-500': link.href !== currentPath,
                                'hover:text-zinc-800 transition-colors': true
                            })}
                        >{link.label}
                        </Link>)
                }
            </ul>
        </nav>
    )
}

