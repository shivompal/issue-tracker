import prisma from '@/prisma/client'
import { Box, Grid } from '@radix-ui/themes'
import delay from 'delay'
import { notFound } from 'next/navigation'
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'

interface Props {
    params: { id: string }
}

export default async function IssueDetailPage({ params }: Props) {
    let issue
    try {
        issue = await prisma.issue.findUnique({
            where: { id: parseInt(params.id) }
        })

        if (!issue)
            notFound()

        await delay(1000)
    } catch (error) {
        notFound()
    }

    return (
        <Grid columns={{ initial: '1', md: '2' }} gap='5'>
            <Box>
                <IssueDetails issue={issue} />
            </Box>
            <Box>
                <EditIssueButton issueId={issue.id} />
            </Box>
        </Grid>
    )
}
