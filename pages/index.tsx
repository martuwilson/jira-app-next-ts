import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { Layout } from '@/components/layouts'
import { EntryList } from '@/components/ui'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='Home - OpenJira'>
      <Grid
        container
        spacing={2}
      >
        <Grid
        item
        xs={12}
        sm={4}
        >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader
              title='Pendientes'
            />


            
              {/* agregar nueva tarea */}
              <EntryList/>
            
          </Card>
        </Grid>

        <Grid
        item
        xs={12}
        sm={4}
        >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader
              title='En progreso'
            />
             <EntryList/>
          </Card>
        </Grid>

        <Grid
        item
        xs={12}
        sm={4}
        >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader
              title='Finalizadas'
            />
             <EntryList/>
          </Card>
        </Grid>
        
      </Grid>
    </Layout>
  )
}
