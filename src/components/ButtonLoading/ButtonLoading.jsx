import React from 'react'
import ReactLoading from 'react-loading'

const ButtonLoading=({ disabled, loading, text, onClick=()=>{}})=>{
    return (
        <button 
            data-testid="button-loading"
            onClick={onClick}
            disabled={disabled}
            type='submit'
            className='bg-indigo-500 text-white'
            >
            {loading? <ReactLoading data-testid="button-loading-active" type='spin' height={30} width={30}/>: text}
        </button>
    )
}
export default ButtonLoading;