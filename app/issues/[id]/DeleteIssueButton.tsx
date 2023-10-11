"use client"
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import React from 'react'

export default function DeleteIssueButton({ issueId }: { issueId: number }) {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button color='red'>Delete Issue</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
                <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
                <AlertDialog.Description>Are you sure you want to delete this issue?</AlertDialog.Description>
                <Flex className='mt-3' gap='3'>
                    <AlertDialog.Cancel>
                        <Button variant='soft' color='gray'>Cancel</Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button color='red'>Delete Issue</Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>

    )
}
