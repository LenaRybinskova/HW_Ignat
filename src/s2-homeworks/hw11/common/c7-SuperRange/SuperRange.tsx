import React from 'react'
import {Slider, SliderProps} from '@mui/material'




const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider sx={{width: 300}} {...props} />
    )
}

export default SuperRange
// отдаём слайдеру пропсы если они есть (value например там внутри)