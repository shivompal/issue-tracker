import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

export default function IssuesActions() {
    return (
        <div className='mb-5'>
            <Button>
                <Link href='/issues/new'>New Issue</Link>
            </Button>
        </div>
    )
}
