import React from 'react'
import IssueForm from '../../_components/IssueForm'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { Issue } from '@prisma/client'

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
