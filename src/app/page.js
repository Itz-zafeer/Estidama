import Hero from '@/components/home/hero/Hero'
import Mission from '@/components/home/mission/Mission'
import Partners from '@/components/home/partners/Partners'
import Services from '@/components/home/services/Services'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import React from 'react'





const page = () => {


  return (
    <Layout>
      <Hero />
      <Mission />
      <Services />
      <Partners />
    </Layout>
  )
}

export default page
