import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Typography } from '@mui/material'
import { Layout } from '@/components/layouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Typography variant="h1" sx={{ fontFamily: inter }}>
        Welcome to Jira App
      </Typography>
    </Layout>
  )
}
