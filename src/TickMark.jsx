import React from 'react'
import './TickMark.css'

function isCheked(checked){
    if(checked){
        return (
            <div className='box checked bg-orange-500 rounded-[20px]
             w-[20px] height-[20px]
             text-white font-bold text-center select-none'>
                ✔
            </div>
        )
    }
    return (
        <div className='box unchecked bg-orange-500 rounded-[10px] w-[20px] height-[20px] text-white font-bold
            text-center select-none'>
            O
        </div>
    )
}

function TickMark({checked}) {
    return (
        isCheked(checked)
    )
}

export default TickMark
