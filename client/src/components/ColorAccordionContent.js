import React,{useState,useRef,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {doFilter} from '../actions'
import '../styles/AccordionContent.scss'
import '../styles/ColorAccordionContent.scss'


const AccordionContent = ({filters,showContent}) => {

        let colors = ['blue','red','green']

        const dispatch = useDispatch()
        const [height , setHeight] = useState("0px")
        const content = useRef(null)

        useEffect(() =>{
            setHeight(showContent ? `${content.current.scrollHeight}px` : '0px')
        },[showContent])

    

    return (
        <div ref={content} style={{maxHeight: `${height}`}} className="accordion-content-wrapper colors">
            {colors.map((color) => <div onClick={() => dispatch(doFilter(color))} className="color accordion-content" style={{background:color}}></div>)}
        </div>
    )
}

export default AccordionContent
