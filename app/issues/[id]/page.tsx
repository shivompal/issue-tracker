import prisma from '@/prisma/client'
import { Box, Flex, Grid } from '@radix-ui/themes'
import delay from 'delay'
import { notFound } from 'next/navigation'
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'
import DeleteIssueButton from './DeleteIssueButton'

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
        <Grid columns={{ initial: '1', sm: '5' }} gap='5'>
            <Box className='md:col-span-4'>
                <IssueDetails issue={issue} />
            </Box>
            <Box>
                <Flex direction='column' gap='4'>
                    <EditIssueButton issueId={issue.id} />
                    <DeleteIssueButton issueId={issue.id} />
                </Flex>
            </Box>
        </Grid>
    )
}
