import { Container, Grid, Title } from '@mantine/core'
import { motion, MotionConfig } from 'framer-motion'
import React from 'react'
import Board from '~/components/Surfaces/Board'

type Props = {}

function index({}: Props) {
  return (
    <motion.div>
        <Container>
            <Grid>
<Grid.Col span={6}>
<Container>
        <Title>
Hello
    </Title>
    <Board title="Solargoth" image="/img1.png"/>
</Container>
</Grid.Col>
<Grid.Col span={6}>
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