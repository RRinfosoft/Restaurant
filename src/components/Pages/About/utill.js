// export const firstarray={
//     main:"About Us",
//     sub:"Learn More About Us.",

import { Card, Col } from "react-bootstrap"

// }

export const array = "About us"
export const array2 = "Learn More About Us"
export const name = "Book a Table"
export const nob = "+1 5589 55488 55"
export const data=" Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duiaute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident"
// cards
export const why="Why Choose Yummy?"
export const lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis."
export const cor="Corporis voluptates officia eiusmod"
export const cor2="Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"
  export const uall="Ullamco laboris ladore pan"
 export const uall2="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
 export const labro="Labore consequatur incidid dolore"
 export const labro2="Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"

// list sections
const listarray = [
    {
        pic: "sahi.png",
        text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
        pic: "sahi.png",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    },
    {
        pic: "sahi.png",
        text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
   
]
const listfun  =(item) =>{
    return(
        <>
    
      <div className='MAIN-BOX'><img className='FIX-SIZE' src={item.pic} /></div>
      <p className="item">{item.text}</p>
        </>
    )
}
export const mainlist =listarray.map(listfun)
export const list="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua."




// Card section
const cardArray=[
    {
        // pic:"dia.jpg",
        title:"Why Choose Yummy?",
        subtitle:"Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.",
    },
    {
        // pic:"dia.jpg",
        title:"Corporis voluptates officia eiusmod",
        subtitle:"Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
    },
    {
        // pic:"images.png",
        title:"Ullamco laboris ladore pan",
        subtitle:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
        // pic:"third.png",
        title:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        subtitle:"Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
    },
]

const cardfun  =(item) =>{
    return(
        <>

      <p className="item">{item.title}</p>
      <p className="item">{item.subtitle}</p>
     
        </>
    )
}
export const mainCard =cardArray.map(cardfun)




// carousel data section
export const caroT ="Aliquid non alias minus"
export const caroT2 ="Where does it come from?"
export const caroT3 ="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Finibus Bonorum et Maloru (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32"

export const carott2="It is a long established fact that"
export const carott22="English. Many desktop publishing packages and web page editors now use"
export const carottt="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Interne Finibus Bonorum et Maloru (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32t"


export const  cartt3t="It has roots in a piece of classical "
export const  cartt33t="discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33"
export const  cartt34t="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Maloru (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32."