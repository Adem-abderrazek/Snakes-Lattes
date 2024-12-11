import React, { useState } from "react";
import Modal from "./Modal.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faIceCream,
  faCocktail,
  faLeaf,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState("Pizza");
const [selectedItem, setSelectedItem] = useState(null);
const [showModal, setShowModal] = useState(false); // Exemple d'initialisation

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
 const handleItemClick=(item)=>{
  setSelectedItem(item);
  setShowModal(true);}
  const menuItems = {
    Desert: [
      {
        name: "Root Beer Float",
        description:
          "Scoop of Vanilla Ice Cream served in a Frosted Mug of Sprecher Root Beer.",
        price: 7.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2022/04/Root-Beer-Float-1-150x150.jpg",
      },
      {
        name: "Vanilla Ice Cream",
        description:
          "Scoop of Vanilla Ice Cream, topped with chocolate sauce, served with chocolate wafer cookies.",
        price: 6.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2022/04/Scoop-Vanilla-150x150.jpg",
      },
    ],
    Pizza: [
      {
        name: "Specialty Pizza of the Month",
        description:
          'Our 16" base pizza with Crispy Bacon, Onion, and Hot Honey Drizzle.',
        price: 30.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2020/12/The-Honey-Bacon-150x150.jpg",
      },
      {
        name: "Da Gabagool",
        description:
          "Red Sauce, Mozzarella, Capicola, Jalapeno, and a drizzle of Hot Honey.",
        price: 30.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2020/12/Da-Gabagool-150x150.jpg",
      },
      {
        name: "Paddy Is Our Daddy Pizza",
        description:
          "Tomato Sauce, Mozzarella, Jowl Bacon, House Italian Sausage, Pepperoni, Parmigiano-Reggiano.",
        price: 32.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2021/09/MAX_and_issys_pizzeria_paddyisourdaddy-2-150x150.jpg",
      },
      {
        name: "Pepperoni Pizza",
        description:
          "Tomato Sauce, Pepperoni, Mozzarella, Parmigiano-Reggiano.",
        price: 26.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2021/09/MAX_and_issys_pizzeria_pepperoni-2-150x150.jpg",
      },
      {
        name: "Hot Honey Pepper Pizza",
        description:
          'Locally Sourced Honey infused with Hot Pepper Flakes, drizzled on a 16" pizza with Goat Cheese, Mozzarella, Basil, and Pepperoni.',
        price: 31.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2022/01/MAX_and_issys_pizzeria_honeypepper-2-150x150.jpg",
      },
      {
        name: "Veggie Pizza",
        description:
          "Tomato Sauce, Mozzarella, Artichokes, Red Onion, Mushroom, Bell Pepper, Parmigiano-Reggiano, Fresh Basil, Fresh Arugula.",
        price: 28.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2021/09/MAX_and_issys_pizzeria_veggie-2-150x150.jpg",
      },
      {
        name: "White Pizza",
        description:
          "Mozzarella, Ricotta, Parmigiano-Reggiano, Cracked Black Pepper, Garlic, Olive Oil",
        price: 29.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2021/09/MAX_and_issys_pizzeria_white-pizza-2-150x150.jpg",
      },
      {
        name: "Margherita Pizza",
        description: "Tomato Sauce, Fresh Mozzarella, Fresh Basil",
        price: 28.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2021/09/MAX_and_issys_pizzeria_margerita-2-150x150.jpg",
      },
      {
        name: "The Queen of Hearts",
        description:
          "The Queen of Hearts Roasted Garlic, Spinach, and Artichoke Hearts White Pizza with Mozzarella, Fresh Mozzarella, Ricotta, Parmigiano Reggiano, and an Olive Oil drizzle.",
        price: 32.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2022/08/Queens-of-Hearts-150x150.jpg",
      },
      {
        name: "Sausage Pizza",
        description:
          "Tomato Sauce, House Italian Sausage, Mozzarella, Parmigiano-Reggiano",
        price: 27.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2021/09/MAX_and_issys_pizzeria_sausage-2-150x150.jpg",
      },
      {
        name: "Cheese Pizza",
        description: "Tomato Sauce, Mozzarella, Parmigiano Reggiano",
        price: 23.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2021/09/MAX_and_issys_pizzeria_cheese-pizza-2-150x150.jpg",
      },
      {
        name: "Red Pizza",
        description:
          "Classic East Coast tomato pie with just our homemade red sauce. No cheese. 100% vegan.",
        price: 20.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2021/05/max_and_issys_pizzeria_redpizza-150x150.jpg",
      },
      ,
    ],
    Salad: [
      {
        name: "Antipasto Plate",
        description:
          "Cured Italian meats, marinated veggies, and honey drizzled burrata served with flatbread.",
        price: 16.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2022/03/image000000-150x150.jpg",
      },
      {
        name: "Apple Italiano",
        description:
          "Spinach/Arugula mix with apples, tomato, red onion, pistachios, fresh basil, and Parmigiano-Reggiano shavings with lemon honey dressing. $14 (add roast chicken breast for $4).",
        price: 14.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2021/09/Apple-Italiano-New-150x150.jpeg",
      },
      {
        name: "House Salad",
        description:
          "Spinach/Arugula mix with red onion, tomato, shaved Parmigiano-Reggiano and red wine vinaigrette. $12 (add roast chicken breast for $4).",
        price: 12.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2021/09/House-Salad-New-150x150.jpeg",
      },
      {
        name: "Max's Mom's Meatballs",
        description:
          "Four house-made beef meatballs in our special marinara sauce with parmigiano reggiano and fresh basil.",
        price: 16.0,
        image:
          "https://www.maxandissys.com/wp-content/uploads/2022/02/Maxs-Moms-Meatballs-150x150.jpg",
      },
    ],
    Drink: [
      {
        name: "3 Floyds Alpha King",
        type: "American Pale Ale",
        abv: "6.66%",
        size: "16oz Draft",
        price: 8.0,
        description:
          "A bold yet balanced American Pale Ale with slight caramel sweetness and aggressive citrus hoppiness.",
      },
      {
        name: "Dovetail Vienna",
        type: "Vienna Lager",
        abv: "5.1%",
        size: "16oz Draft",
        price: 8.0,
        description:
          "Copper in color, with a warm, malty character, made with 100% Vienna malt and Styrian Golding hops.",
      },
      {
        name: "Guinness Draught",
        type: "Dry Stout",
        abv: "4.2%",
        size: "20oz Draft",
        price: 8.0,
        description:
          "A crisp dark beer with a red hue, a balance of bitter and sweet notes, and a dry finish.",
      },
      {
        name: "Kaiser Tiger",
        type: "German Hefeweizen",
        abv: "5.3%",
        size: "20oz Draft",
        price: 8.0,
        description:
          "Bold, yeast-forward wheat beer with aromas of banana and clove, delivering a sunny, refreshing taste.",
      },
      {
        name: "Kaiser Tiger/Great Central",
        type: "Helles Lager",
        abv: "5.0%",
        size: "16oz Draft",
        price: 8.0,
        description:
          "An easy-drinking Helles Lager perfect for hardworking individuals.",
      },
      {
        name: "Maplewood Son of Juice",
        type: "IPA",
        abv: "6.3%",
        size: "16oz Draft",
        price: 8.0,
        description:
          "Bursting with notes of tropical fruit, featuring Mosaic, Simcoe, and Nugget hops. Soft body with a touch of haze.",
      },
      {
        name: "Pipeworks Ninja Vs Unicorn",
        type: "Double IPA",
        abv: "8.0%",
        size: "10oz Draft",
        price: 8.0,
        description:
          "A classic Double IPA with a balanced malt profile and hop-forward flavors.",
      },
      {
        name: "Right Bee Cider: Blossom",
        type: "Cider",
        abv: "6.0%",
        size: "16oz Draft",
        price: 9.0,
        description:
          "A cider with a touch of lemon myrtle and cherry blossom for a wine-like, floral quality.",
      },
      {
        name: "Une AnnÃ©e Le Seul VII Mango",
        type: "Sour Ale",
        abv: "6.5%",
        size: "10oz Draft",
        price: 9.0,
        description:
          "A wild ale fermented with mango for a tropical sour flavor.",
      },
    ],
  };

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when the category changes
  };

  // Get the current page's items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuItems[selectedCategory].slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(
    menuItems[selectedCategory].length / itemsPerPage
  );

  return (

    <div className="py-16 bg-black" >

    {  showModal&& <Modal item={selectedItem} setShowModal={setShowModal} />}
      <div className={`max-w-7xl mx-auto text-center mb-12 ${showModal ? "opacity-50" : "opacity-100"}`} >
        <h2 className="text-4xl font-bold mb-8 animated-heading text-[#B73C21] times-new-roman">
          Food Menu
        </h2>
        <p className="text-lg mt-4 text-[#fae0c1] font-merienda">
          Discover our delightful food options curated just for you.
        </p>
      </div>

      <div className="flex justify-center space-x-16 mb-8">

        <button
          onClick={() => handleCategoryClick("Pizza")}
          className={`flex flex-col items-center hover-animation p-4 rounded-lg focus:outline-none ${
            selectedCategory === "Pizza" ? "bg-orange-100" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faUtensils}
            className="text-6xl text-[#B73C21] mb-2 bounce-icon"
          />
          <p className="text-lg font-semibold">Food</p>
        </button>
        <button
          onClick={() => handleCategoryClick("Salad")}
          className={`flex flex-col items-center hover-animation p-4 rounded-lg focus:outline-none ${
            selectedCategory === "Salad" ? "bg-orange-100" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faLeaf}
            className="text-6xl text-[#B73C21] mb-2 bounce-icon"
          />
          <p className="text-lg font-semibold">Salad</p>
        </button>
        <button
          onClick={() => handleCategoryClick("Desert")}
          className={`flex flex-col items-center hover-animation p-4 rounded-lg focus:outline-none ${
            selectedCategory === "Desert" ? "bg-orange-100" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faIceCream}
            className="text-6xl text-[#B73C21] mb-2 bounce-icon"
          />
          <p className="text-lg font-semibold">Desert</p>
        </button>
        <button
          onClick={() => handleCategoryClick("Drink")}
          className={`flex flex-col items-center hover-animation p-4 rounded-lg focus:outline-none ${
            selectedCategory === "Drink" ? "bg-orange-100" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faCocktail}
            className="text-6xl text-[#B73C21] mb-2 bounce-icon"
          />
          <p className="text-lg font-semibold">Drink</p>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {currentItems.map((item) => (
          <div onClick={() => handleItemClick(item)}
            key={item.name}
            className="flex items-center space-x-6 w-full max-w-xs"
          >
            {selectedCategory !== "Drink" ? (
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
              />
            ) : (
              <></>
            )}
            <div className="flex-1">
              <h3
                className="text-xl text-[#B73C21] md:text-2xl font-bold overflow-hidden text-ellipsis whitespace-nowrap"
                title={item.name} // Shows full text on hover
              >
                {item.name}
              </h3>
          
            </div>

            <div className="text-yellow-500 font-bold text-lg md:text-xl">
              {item.price}$
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#b73c21] text-white rounded-md mr-4"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-4xl text-[#fae0c1] mb-2 bounce-icon"
          />
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-[#b73c21] text-white rounded-md"
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-4xl text-[#fae0c1] mb-2 bounce-icon"
          />
        </button>
      </div>
    </div>
  );
}

export default FoodMenu;
