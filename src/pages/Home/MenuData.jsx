import React, { useState } from "react";
import  '../../index.css'
import i1 from '../../assets/i1.jpg'
import i2 from '../../assets/i2.jpg'
import i3 from '../../assets/i3.jpg'
import i4 from '../../assets/i4.jpg'
import i5 from '../../assets/i5.jpg'
import i6 from '../../assets/i6.jpg'
import i7 from '../../assets/i7.jpg'
import i8 from '../../assets/i8.jpg'

const menuData = {
    Appetizers: [
        {
          image: i1,
          dishName: 'Bruschetta',
          dishInfo: 'Toasted bread with tomatoes and basil.',
          price: '$6.99',
        },
        {
          image: i2,
          dishName: 'Stuffed Mushrooms',
          dishInfo: 'Mushrooms filled with cheese and herbs.',
          price: '$8.49',
        },
        {
          image: i3,
          dishName: 'Spring Rolls',
          dishInfo: 'Crispy rolls with veggies and dipping sauce.',
          price: '$7.99',
        },
        {
          image: i4,
          dishName: 'Garlic Bread',
          dishInfo: 'Buttery bread with garlic and herbs.',
          price: '$5.49',
        },
        {
          image: i5,
          dishName: 'Mozzarella Sticks',
          dishInfo: 'Fried cheese sticks served with marinara.',
          price: '$8.99',
        },
        {
          image: i6,
          dishName: 'Hummus & Pita',
          dishInfo: 'Creamy hummus with pita bread slices.',
          price: '$6.49',
        },
        {
          image: i7,
          dishName: 'Onion Rings',
          dishInfo: 'Crispy battered onion rings served hot.',
          price: '$5.99',
        },
        {
          image: i8,
          dishName: 'Chicken Wings',
          dishInfo: 'Spicy wings with choice of sauce.',
          price: '$9.49',
        },
      ],
    Drinks: [
        {
          image: i1,
          dishName: 'Lemonade',
          dishInfo: 'Freshly squeezed lemonade with mint.',
          price: '$4.99',
        },
        {
          image: i2,
          dishName: 'Iced Tea',
          dishInfo: 'Sweetened iced tea served with lemon.',
          price: '$3.99',
        },
        {
          image: i3,
          dishName: 'Mango Smoothie',
          dishInfo: 'Blend of mango, yogurt, and honey.',
          price: '$5.49',
        },
        {
          image: i4,
          dishName: 'Coffee',
          dishInfo: 'Hot brewed coffee with a rich aroma.',
          price: '$2.99',
        },
        {
          image: i5,
          dishName: 'Coconut Water',
          dishInfo: 'Fresh coconut water served chilled.',
          price: '$3.49',
        },
        {
          image: i6,
          dishName: 'Milkshake',
          dishInfo: 'Creamy milkshake with vanilla flavor.',
          price: '$6.49',
        },
        {
          image: i7,
          dishName: 'Soft Drink',
          dishInfo: 'Classic soda served with ice.',
          price: '$2.49',
        },
        {
          image: i8,
          dishName: 'Sparkling Water',
          dishInfo: 'Chilled sparkling water with lemon.',
          price: '$2.99',
        },
      ],
    SeaFood: [
        {
          image: i1,
          dishName: 'Lobster Tail',
          dishInfo: 'Grilled lobster tail served with butter.',
          price: '$24.99',
        },
        {
          image: i2,
          dishName: 'Fish Tacos',
          dishInfo: 'Fresh fish wrapped in soft tortillas.',
          price: '$12.49',
        },
        {
          image: i3,
          dishName: 'Shrimp Cocktail',
          dishInfo: 'Chilled shrimp served with cocktail sauce.',
          price: '$10.99',
        },
        {
          image: i4,
          dishName: 'Clam Chowder',
          dishInfo: 'Creamy soup with clams and potatoes.',
          price: '$7.99',
        },
        {
          image: i5,
          dishName: 'Oysters Rockefeller',
          dishInfo: 'Oysters topped with spinach and cheese.',
          price: '$15.49',
        },
        {
          image: i6,
          dishName: 'Crab Cakes',
          dishInfo: 'Fried crab cakes with tartar sauce.',
          price: '$16.99',
        },
        {
          image: i7,
          dishName: 'Grilled Scallops',
          dishInfo: 'Scallops grilled with lemon butter sauce.',
          price: '$18.49',
        },
        {
          image: i8,
          dishName: 'Seafood Paella',
          dishInfo: 'Rice with seafood, saffron, and spices.',
          price: '$22.99',
        },
      ],
    Grill: [
        {
          image: i1,
          dishName: 'Grilled Chicken',
          dishInfo: 'Marinated chicken grilled to perfection.',
          price: '$12.99',
        },
        {
          image: i2,
          dishName: 'BBQ Ribs',
          dishInfo: 'Tender ribs glazed with BBQ sauce.',
          price: '$15.99',
        },
        {
          image: i3,
          dishName: 'Grilled Salmon',
          dishInfo: 'Fresh salmon grilled with lemon seasoning.',
          price: '$18.49',
        },
        {
          image: i4,
          dishName: 'Steak Frites',
          dishInfo: 'Juicy steak served with crispy fries.',
          price: '$21.99',
        },
        {
          image: i5,
          dishName: 'Vegetable Skewers',
          dishInfo: 'Grilled mixed veggies with spices.',
          price: '$10.99',
        },
        {
          image: i6,
          dishName: 'Grilled Shrimp',
          dishInfo: 'Shrimp grilled with garlic butter.',
          price: '$14.99',
        },
        {
          image: i7,
          dishName: 'Chicken Satay',
          dishInfo: 'Chicken skewers with peanut dipping sauce.',
          price: '$11.49',
        },
        {
          image: i8,
          dishName: 'Lamb Chops',
          dishInfo: 'Tender lamb chops grilled with rosemary.',
          price: '$19.99',
        },
      ],
    Deserts:
   [
    {
      image: i1,
      dishName: 'Chocolate Cake',
      dishInfo: 'Rich chocolate cake with creamy frosting.',
      price: '$6.99',
    },
    {
      image: i2,
      dishName: 'Cheesecake',
      dishInfo: 'Classic cheesecake with berry topping.',
      price: '$7.49',
    },
    {
      image: i3,
      dishName: 'Apple Pie',
      dishInfo: 'Warm apple pie served with vanilla ice cream.',
      price: '$5.99',
    },
    {
      image: i4,
      dishName: 'Tiramisu',
      dishInfo: 'Layered coffee-flavored Italian dessert.',
      price: '$8.49',
    },
    {
      image: i5,
      dishName: 'Lemon Sorbet',
      dishInfo: 'Refreshing lemon sorbet served cold.',
      price: '$4.99',
    },
    {
      image: i6,
      dishName: 'Panna Cotta',
      dishInfo: 'Creamy vanilla panna cotta with berries.',
      price: '$7.99',
    },
    {
      image: i7,
      dishName: 'Brownie Sundae',
      dishInfo: 'Chocolate brownie topped with ice cream.',
      price: '$6.49',
    },
    {
      image: i8,
      dishName: 'Creme Brulee',
      dishInfo: 'Vanilla custard with a caramelized sugar top.',
      price: '$8.99',
    },
  ],
  };

const categories = ["Appetizers", "Grill", "SeaFood", "Drinks", "Deserts"];

const MenuComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="overflow-x-clip pt-3 px-4 bg-white">
      <div className="category-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:min-h-[5rem] gap-4 mb-6 overflow-hidden">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`py-2 text-sm sm:text-lg md:text-xl rounded-md transition duration-300 ease-in-out focus:outline-none ${
              selectedCategory === category
                ? "bg-[#f1a986] text-white transform scale-105"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="data-display mt-6">
        <div className="data-container px-4 sm:px-8 md:px-11">
          <div className="menu-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {menuData[selectedCategory].map((item, index) => (
              <div
                key={index}
                className="menu-item border p-4 rounded-md bg-white shadow-lg flex flex-col items-center sm:flex-row sm:items-start"
              >
                <div className="menu-item-content flex-1 text-center sm:text-left">
                  <h3 className="font-semibold text-lg sm:text-xl">{item.dishName}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.dishInfo}</p>
                  <p className="text-lg font-bold mt-2">{item.price}</p>
                </div>
                <div
                  className="ml-auto mt-4 sm:mt-0 sm:flex-none sm:w-auto flex-col flex justify-between mx-auto items-center"
                >
                  <img
                    src={item.image}
                    alt={item.dishName}
                    className="w-20 h-20 sm:w-16 sm:h-16 object-cover rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;


