import React, { useEffect, useState } from 'react';
import './Submitted.css'

export function Submitted(props){
    
    useEffect(() => {
        document.title = "This is a title"
      }, [])
  

    return (
        <div className='container'>
            <div className='box'>
                <h1>تم إرسال ردك بنجاح</h1>
            </div>
        </div>
    )
  }