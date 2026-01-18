import React from 'react'
import AppHeader from './_components/AppHeader'
import { Toaster } from '@/components/ui/sonner'

function DashboardLayout({children}:any) {
  return (
    <div>
        <AppHeader/>
        { children }
        <Toaster />
    </div>
  )
}

export default DashboardLayout