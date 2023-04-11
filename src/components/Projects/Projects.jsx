import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./Projects.css"
import Project1 from './Project1'
import Project4 from './Project4'
import Project2 from './Project2'
import Project3 from './Project3'

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media"
]

const Projects = () => {
  const [project, setProject] = useState(0)
  
  return (
    <Container id="Projects" className='container' sx={{
      display:'flex',
      justifyContent:'space-between',
      scrollSnapAlign:'center',

      '@media screen and (max-width: 768px)': {
        width:'100%',
        flexDirection:'column',
        scrollSnapAlign:'none',
      },
    }}>
      <Box className='left-project'> 
        <List className='list'>
          {data.map((item,index)=>(
            <ListItem key={item}>
              <ListItemText 
              onClick={()=>{setProject(index)
              console.log("Project: ",project)
              console.log("Index: ",index)}
            }
              primary=
              {<Typography 
                sx={{
                  fontSize:'60px',
                  lineHeight:'1',
                  letterSpacing:'0',
                  fontWeight:'bold',
                  color:'transparent',
                  cursor:'pointer',
                  WebkitTextStroke:'1px white',
                  position:'relative',
                  whiteSpace:'nowrap',
                  '&::after': {
                    content: '"'+item+'"',
                    position:"absolute",
                    top:'0px',
                    left:'0',
                    width:'0%',
                    color:'pink',
                    overflow:'hidden'
                    
                  },
                  
                  '&:hover':{
                    '&::after':{
                      animation: 'moveText 0.5s linear both',
                    }
                  },
                  '@media screen and (max-width: 768px)': {
                    fontSize: '24px',
                    color: 'white',
                    WebkitTextStroke:'0px white',
                    textAlign:'center',
                  },
                }}
                >
                  {item}
              </Typography>}
              />
            </ListItem>
          ))}
          
        </List>
      </Box>
      <Box className='right-project'>
          {
          project === 0 ? <Project1 /> :
            (project === 1 ? <Project2 /> :
              (project === 2 ? <Project3 /> :
                <Project4 />))
          }
      </Box>
    </Container>
  )
}

export default Projects