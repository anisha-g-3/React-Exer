import React from 'react'
import {List,ListItem,Divider,ListItemText,Typography} from '@mui/material'
function Lee() {
  return (
    <div>
      <List sx={{backgroundColor:'whitesmoke',width:'80vh',textAlign:'center',padding:'20px'}}>
        <Typography variant="h4" >
          Most Influential Books of All Time
        </Typography>
        <ListItem>
          <ListItemText
          primary={
              <Typography variant="h6">
                The Holy Bible
              </Typography>
          }
          secondary={
            <Typography variant="body2">
                Religious text of Christianity, considered sacred and canonical.
              </Typography>
           }
           />
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemText
          primary={
              <Typography variant="h6">
                Quotations from Chairman Mao
              </Typography>
          }
          secondary={
              <Typography variant="body2">
                Collection of statements from speeches and writings by Ma Zedong.
              </Typography>
           }
           />
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemText
          primary={
              <Typography variant="h6">
                Harry Potter series
              </Typography>
          }
          secondary={
              <Typography variant="body2">
                Fantasy novels by J.K.Rowling, following the life of a young wizard.
              </Typography>
           }
           />
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemText
          primary={
              <Typography variant="h6">
                The Lord of the Rings
              </Typography>
          }
          secondary={
              <Typography variant="body2">
                High-fantasy novel written by J.R.R.Tolkien, set in Middle-earth.
              </Typography>
           }
           />
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemText
          primary={
              <Typography variant="h6">
                To Kill a Mockingbird
              </Typography>
          }
          secondary={
              <Typography variant="body2">
                Novel by Harper Lee, dealing with racial injustice and moral growth.
              </Typography>
           }
           />
        </ListItem>
      </List>
    </div>
  )
}

export default Lee;