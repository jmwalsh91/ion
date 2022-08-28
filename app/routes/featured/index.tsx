import { Container, Grid, Title } from '@mantine/core'
import { motion, MotionConfig } from 'framer-motion'
import React from 'react'

type Props = {}

function index({}: Props) {
  return (
    <motion.div>
        <Container>
            <Grid>
<Grid.Col span={12}>
<Container>
        <Title>
Hello
    </Title>
</Container>
</Grid.Col>
<Grid.Col span={12}>
<Container>
        <Title>
            And Hello
            </Title>

    </Container>


            </Grid.Col>
            </Grid>
            </Container>
    </motion.div>
        
  )
}

export default index