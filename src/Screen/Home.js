import { Box,Typography } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  '../App.css'


const Home = () => {
  const dispatch = useDispatch();

  const [articles, setArticles] = useState([])
  const getNEws = () => {
    let api = 'https://newsapi.org/v2/everything?q=apple&from=2022-06-01&to=2022-06-01&sortBy=popularity&apiKey=19a8f3088f024403ac2ad4de40c5bd8c'
    axios.get(api)
      .then((success) => {
        console.log(success)

        dispatch({
          type:'transformApi',
          userApi:(success.axios)
        })

        
        setArticles(success.data.articles)
      }

      ).catch((err) => {
        console.log(err)
      })

  }

  const blabla = useSelector((a) => a)
  console.log(blabla);


  const update = () => {
    dispatch({
      type: 'transform',
      userName: 'API',
    })
    
  }

  return (
    <div className='appcenter'>

      <div>
        <h1>{blabla.userName}</h1>
        <button className='btn' onClick={update}>update</button>
        <button className='btn2' onClick={getNEws}>GET</button>
      </div>
      <>
      {
        articles.map((e, i) => (

          <Box
            className='Boxhover' sx={{ marginBottom: 5, padding: 4, boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;' }} >
            <Box sx={{ display: 'flex', justifycontent: 'start', }} >
              <img src={e.urlToImage} width='250px' alt='' />
              <Typography variant='h4'>{e.title}</Typography>
            </Box>
            <Typography >{e.description}</Typography>
            <Typography fontWeight={600} > PUBLISHED AT :- {e.publishedAt}</Typography>
          </Box>
        )

        )
      }
      </>

    </div>
  )
}
export default Home
