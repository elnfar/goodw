import AuthenticationWrapper from '@/lib/wrappers/auth-wrapper'
import React from 'react'

export default function page() {
  return (
    <AuthenticationWrapper>
       <div>Hi to onboarding!</div>
    </AuthenticationWrapper>
  )
}
