import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {Sidebar, Videos } from './'

import { fetch } from '../utils/api'

const Feed = () => {

const [selectedCategory, setSelectedCategory] = useState('New')
const [vidoes, setVidoes] = useState([])


  useEffect(() => {
    fetch(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVidoes(data.items))
  }, [selectedCategory])
  
  return (
    <Stack sx={{flexDirection: {xs: "column", md: "row"}}}>
      <Box sx={{height: {xs: 'auto', md: '92vh', borderRight: '1px solid #3d3d3d', px: {xs: 0, md: 2}}}}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2023 Supreme Media
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: '#F31503'}}>Videos</span>
        </Typography>

        <Videos videos={vidoes} />
      </Box>
    </Stack>
  )
}

export default Feed