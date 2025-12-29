import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ResumeUpload from './ResumeUpload'
import JobDescription from './JobDescription'

function CreateInterviewDialog() {

    const [formData, setFormData] = useState<any>();

    const onHandleInputChange=(field:string, value:string)=>{
        setFormData((prev:any)=>({
            ...prev,
            [field]:value
        }))
    }


    return (
        <Dialog>
            <DialogTrigger>
                <Button>Create Interview</Button>
            </DialogTrigger>
            <DialogContent className='min-w-3xl'>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        <Tabs defaultValue="resume-upload" className="w-full mt-4">
                            <TabsList>
                                <TabsTrigger value="resume-upload">Resume Upload</TabsTrigger>
                                <TabsTrigger value="job-description">Job Description</TabsTrigger>
                            </TabsList>
                            <TabsContent value="resume-upload"><ResumeUpload/></TabsContent>
                            <TabsContent value="job-description"><JobDescription onHandleInputchange={onHandleInputChange}/></TabsContent>
                        </Tabs>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button variant={'outline'}>Cancel</Button>
                    </DialogClose>
                    <Button>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CreateInterviewDialog