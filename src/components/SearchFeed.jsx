import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Videos } from './'

import { fetch } from '../utils/api'

const SearchFeed = () => {

const [vidoes, setVidoes] = useState([])
const {searchTerm} = useParams()


  useEffect(() => {
    fetch(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVidoes(data.items))
  }, [searchTerm])
  
  return (
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
        {'Search Results for:'} <span style={{color: '#F31503'}}>{searchTerm}</span> Videos
      </Typography>

      <Videos videos={vidoes} />
    </Box>
  )
}

export default SearchFeed