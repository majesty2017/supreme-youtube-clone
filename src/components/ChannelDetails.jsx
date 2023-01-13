import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetch } from '../utils/api'
import {Videos, ChannelCard} from './'

const ChannelDetails = () => {

  const {id} = useParams()

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  console.log(videos);

  useEffect(() => {
    fetch(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))
    .catch(err => console.log(err))

    fetch(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
    .catch(err => console.log(err))
  }, [id])
  

  return (
    <Box minHeight='95vh'>
      <Box>
        <div 
          style={{
            background: 'linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard marginTop='-110px' channelDetail={channelDetail} />
      </Box>

      <Box display="flex" p={2}>
        <Box sx={{mr: {sm: '100px'}}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetails