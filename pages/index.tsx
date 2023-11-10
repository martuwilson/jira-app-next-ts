import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { Layout } from '@/components/layouts'

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


            <CardContent>
              {/* agregar nueva tarea */}
              {/* listado de entradas */}
            </CardContent>
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
          </Card>
        </Grid>
        
      </Grid>
    </Layout>
  )
}
