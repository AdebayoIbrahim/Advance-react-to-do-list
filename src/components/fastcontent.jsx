import { Box } from '@mui/material'
import React from 'react'

function Tooltip() {
  return (
    <Box>
        {/* image */}
        <Typography component="h1" fontSize={24} fontWeight={500}>
              My Day
            </Typography>{" "}
            <Typography variant="body2" mt={1}>
              {dateValue}
            </Typography>
    </Box>
  )
}

export default Tooltip