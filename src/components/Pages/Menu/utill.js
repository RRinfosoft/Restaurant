import { Col } from "react-bootstrap"

export const ours="Our Menu"
export const ours2=" Check Our"
export const our3="Yummy Menu"
export const starter="Starters"
export const breakf="BreakFast"
export const lunch="Lunch"
export const dinner="Dinner"
export const menu="Menu"



const menus=[
    {
        pic:"menu-item-1.png",
        main:"Magnam Tiste",
        sub:"Lorem, deren, trataro, filede, nerada",
        price:"$5.95",
    },
    {
        pic:"menu-item-2.png",
        main:"Aut Luia",
        sub:"Lorem, deren, trataro, filede, nerada",
        price:"$14.95",
    },
    {
        pic:"menu-item-3.png",
        main:"Est Eligendi",
        sub:"Lorem, deren, trataro, filede, nerada",
        price:"$8.95",
    },
]

const menuFun = (items) => {
    return (
        <>
    
    
            <Col sm={4}>
                <div>
                    <img  src={items.pic} />
                </div>
                <p>{items.main}</p>
                <p>{items.sub}</p>
                <p>{items.price}</p>
              
            </Col>
    
    
        </>
    
    )
    }
    export const mainmenu = menus.map(menuFun)