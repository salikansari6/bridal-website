import React,{useState,useEffect} from 'react'
import ColorAccordionContent from './ColorAccordionContent'
import '../styles/Accordion.scss'




const Accordion = ({heading,filters}) => {
    const [showContent,setShowContent] = useState(false)


    const handleClick = () =>{
        setShowContent(!showContent)
    }

    


    return (
        <div className="accordion">
            <div className="accordion__heading"  onClick={handleClick}>
            <span className="sign">{showContent ? '-' : '+'}</span><span>Color</span>
            </div>
            {
                <ColorAccordionContent showContent={showContent}></ColorAccordionContent>
            }
        </div>
    )
}

export default Accordion
