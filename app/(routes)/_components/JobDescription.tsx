import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function JobDescription({onHandleInputChange}: any) {
  return (
    <div className="grid gap-5">
            <div className="grid gap-3">
              <Label >Job Title</Label>
              <Input placeholder="Ex. Full Stack Developer" 
                onChange={(e)=> onHandleInputChange('jobTitle',e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label >Job Description</Label>
              <Textarea placeholder="PLease provide job description" 
                onChange={(e)=> onHandleInputChange('jobDescription',e.target.value)}
              />
            </div>
          </div>
  )
}

export default JobDescription