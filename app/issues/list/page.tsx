import { Table } from '@radix-ui/themes'
// import Link from 'next/link'
import prisma from '@/prisma/client'
import delay from 'delay'
import { IssueStatusBadge, Link } from '@/app/components'
import IssuesActions from './IssuesActions'

export default async function IssuesPage() {
    const issues = await prisma.issue.findMany()
    await delay(1000)
    return (
        <div>
            <IssuesActions />
            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        issues.map(issue => (
                            <Table.Row key={issue.id}>
                                <Table.Cell>
                                    <Link href={`/issues/${issue.id}`}>
                                        {issue.title}
                                    </Link>
                                    <div className='block md:hidden'>
                                        <IssueStatusBadge status={issue.status} />
                                    </div>
                                </Table.Cell>
                                <Table.Cell className='hidden md:table-cell'><IssueStatusBadge status={issue.status} /></Table.Cell>
                                <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table.Root>
        </div>

    )
}

// Below line tells NextJS to opt out of static rendering
export const dynamic = 'force-dynamic'
// export const revalidate = 0
// export const revalidate = 30