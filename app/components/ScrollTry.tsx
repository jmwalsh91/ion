import { Container, Grid, Slider, Title } from '@mantine/core'
import { motion, MotionConfig, useScroll, useSpring } from 'framer-motion'
import React, { useEffect } from 'react'
import Board from '~/components/Surfaces/Board'
import chroma from "chroma-js"
import { useLogger } from '@mantine/hooks'

type Props = {}

function ScrollTry({}: Props) {
 const [value, setValue] = React.useState(40)
 const [color1, setColor1] = React.useState<string>()
    const { scrollYProgress } = useScroll()
const scaleX = useSpring(scrollYProgress)
const colorz = chroma.scale(['lightblue', 'purple', 'cyan', 'pink']).domain([0, 100])

scrollYProgress.onChange(() => {
    console.log(scrollYProgress.get())
    
    setValue(scrollYProgress.get())
    console.log("value is " + value)
    setColor1(colorz(value).css())
console.log(color1)
})



  return (
    <div style={{
        height: "300vh"
    }}>
    <motion.div>
        <Container>
            <Grid>
<Grid.Col span={4}>
<Container>
        <Title>
Hello
    </Title>
    <Board title="Solargoth" image="/img1.png"/>
</Container>
</Grid.Col>
<Grid.Col span={8}>
<Container>
        <Title order={1} sx={{
            fontSize: "8rem"
        }}>
            Featured spaces.
            </Title>

    </Container>


            </Grid.Col>
            </Grid>
            </Container>
    </motion.div>
    <motion.div 
    initial={{
        opacity: 0,
   
    }}
    whileInView={{
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 20,
            damping: 20,
            duration: 3
        }
    }}
    style={{
        backgroundColor: /* colorz(scrollYProgress.get()) as unknown as string     */ color1 as unknown as string,
      }}
  
    >
        <Container>
            <Grid>
<Grid.Col span={4}>
<Container   >
    <Title >
    hello
    </Title>    
        <Board title="Phthalo" image="/img2.png" />
</Container>
</Grid.Col>
<Grid.Col span={8}>
<Container sx={{
    backgroundColor: color1
}}>
        <Board title="Tridentata" image="/img3.png"/>
</Container>
</Grid.Col>
</Grid>
</Container>
{/* <Slider value={value} onChange={setValue} /> */}

    </motion.div>
        </div>
  )
}

export default ScrollTry