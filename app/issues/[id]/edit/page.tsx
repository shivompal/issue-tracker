import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
// import IssueForm from '../../_components/IssueForm'
import dynamic from 'next/dynamic'
import IssueFormSkeleton from './loading'

const IssueForm = dynamic(
    () => import('@/app/issues/_components/IssueForm'),
    {
        ssr: false,
        loading: () => <IssueFormSkeleton />
    }
)
interface Props {
    params: { id: string }
}
export default async function EditIssuePage({ params }: Props) {
    let issue
    try {
        issue = await prisma.issue.findUnique({
            where: { id: parseInt(params.id) }
        })

        if (!issue) notFound()

    } catch (error) {
        notFound()
    }
    return (
        <IssueForm issue={issue} />
    )
}
