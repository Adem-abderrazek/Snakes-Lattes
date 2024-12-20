import background from '../../../assets/background.png'
import { useState } from 'react';
import HTMLFlipBook from "react-pageflip";
import "swiper/swiper-bundle.css"



function FoodMenu() {
  
  const bookBackgroundImage = "hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmu6n_ZDhn9rSBZeraqpW77sfOzipE0VIlkg6p_Xhugk5FMUFem9Lg3cT0IoLJ2AbYEV4&usqp=CAU";
  
  const [cursorStyle, setCursorStyle] = useState("grab");
  const menuData = [
    {
      category: "House Charcuterie",
      items: [
        { name: "Duck Liver Mousse", price: 9 },
        { name: "Pork Rillettes", price: 9 },
        { name: "Soppressata", price: 9 },
        { name: "Coppa", price: 9 },
        { name: "Bresaola", price: 9 },
        { name: "Smoked Lamb Summer Sausage", price: 9 },
        { name: "Pork & Bacon Terrine", price: 9 },
        { name: "Porchetta", price: 9 }
      ]
    },
    {
      category: "Cheese",
      items: [
        { name: "Hornkuhkase (Switzerland)", price: 9 },
        { name: "Dream Weaver (California)", price: 9 },
        { name: "Mimolette Vieille (France)", price: 9 },
        { name: "Prairie Breeze Cheddar (Iowa)", price: 9 },
        { name: "Delice de Bourgogne (France)", price: 9 }
      ]
    },
    {
      category: "Plates",
      items: [
        { name: "House Charcuterie Selection", price: 24 },
        { name: "Artisanal Cheese Plate", price: 24 },
        { name: "Cheese & Charcuterie Plate", price: 30 }
      ]
    },
    {
      category: "Small Plates",
      items: [
        { name: "Potato Latkes", price: 7 },
        { name: "Honey Nut Squash & Yellow Split Pea Dip", price: 14 },
        { name: "Charred Delicata Squash", price: 14 },
        { name: "Crispy Brussels Sprouts", price: 14 },
        { name: "Beets & Bosc Pears", price: 15 },
        { name: "Fried Polenta", price: 17 },
        { name: "White Anchovy Toast", price: 14 },
        { name: "Smoked Alpine Sausage", price: 15 },
        { name: "Marinated Slagel Steak", price: 15 },
        { name: "Beef Cheek Croquettes", price: 16 }
      ]
    },
    {
      category: "Large Plates",
      items: [
        { name: "Kuri Squash Risotto", price: 28 },
        { name: "Pappardelle", price: 28 },
        { name: "Buckwheat Gnocchi", price: 24 },
        { name: "Pan-Seared Fjord Trout", price: 33 },
        { name: "Duck Confit Garbure", price: 36 },
        { name: "Pork Schnitzel", price: 27 },
        { name: "Slagel Farms Burger", price: 17 }
      ]
    },
    {
      category: "Dessert",
      items: [
        { name: "Cranberry Sticky Pudding", price: 12 },
        { name: "Pumpkin Cornmeal Cake", price: 12 }
      ]
    }
  ];



  return (
    <>
     <div
      className=" bg-[#7c7c5f] text-black"
      style={{ cursor: cursorStyle }}
    >
     <HTMLFlipBook
  className="flipbook"
  width={50}
  height={50}
  size="stretch"
  flippingTime={1000}

  onFlip={(e) => {
    if (e.data === 0) {
      setCursorStyle("not-allowed");
    } else {
      setCursorStyle("grab");
    }
  }}
>

        {menuData .map((e, index) => (
           <div 
           key={index} 
       
          
         >
           <div className="flex gap-0 mt-12 justify-around w-full">
          
               <div
                 key={index}
                 style={{ backgroundImage: `url(${background})` }}
                 className="  rounded-lg w-[100%] p-12 h-[90vh] bg-no-repeat bg-cover  "
               >
                 <h2 className="text-2xl mb-12  font-bold  text-center border-b ">
                   {e.category}
                 </h2>
                 <ul className="space-y-8">
                   {e.items.map((item, id) => (
                     <li key={id} className="flex justify-between items-center">
                       <span className="font-semibold text-[30px]">{item.name}</span>
                       <span className=" text-[20px] text-gray-600">${item.price.toFixed(2)}</span>
                     </li>
                   ))}
                 </ul>
               </div>
           
           </div>
         </div>
       ))}
     </HTMLFlipBook>
   </div>
</>
     
  )
}

export default FoodMenu