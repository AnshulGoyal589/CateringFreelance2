import React, { useState } from "react";
import  '../../index.css'

const menuData = {
    Appetizers: [
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052090/i1_qphgkp.jpg",
          dishName: 'Bruschetta',
          dishInfo: 'Toasted bread with tomatoes and basil.',
          price: '$6.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052125/i2_p4l78k.jpg",
          dishName: 'Stuffed Mushrooms',
          dishInfo: 'Mushrooms filled with cheese and herbs.',
          price: '$8.49',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052150/i4_z696tk.jpg",
          dishName: 'Spring Rolls',
          dishInfo: 'Crispy rolls with veggies and dipping sauce.',
          price: '$7.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052150/i5_djemdb.jpg",
          dishName: 'Garlic Bread',
          dishInfo: 'Buttery bread with garlic and herbs.',
          price: '$5.49',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i8_fvdp8m.jpg",
          dishName: 'Mozzarella Sticks',
          dishInfo: 'Fried cheese sticks served with marinara.',
          price: '$8.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i3_tai7b8.jpg",
          dishName: 'Hummus & Pita',
          dishInfo: 'Creamy hummus with pita bread slices.',
          price: '$6.49',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052152/i7_gfdtid.jpg",
          dishName: 'Onion Rings',
          dishInfo: 'Crispy battered onion rings served hot.',
          price: '$5.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i6_i6n4aj.jpg",
          dishName: 'Chicken Wings',
          dishInfo: 'Spicy wings with choice of sauce.',
          price: '$9.49',
        },
      ],
    Drinks: [
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052090/i1_qphgkp.jpg",
          dishName: 'Lemonade',
          dishInfo: 'Freshly squeezed lemonade with mint.',
          price: '$4.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052125/i2_p4l78k.jpg",
          dishName: 'Iced Tea',
          dishInfo: 'Sweetened iced tea served with lemon.',
          price: '$3.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052150/i4_z696tk.jpg",
          dishName: 'Mango Smoothie',
          dishInfo: 'Blend of mango, yogurt, and honey.',
          price: '$5.49',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052150/i5_djemdb.jpg",
          dishName: 'Coffee',
          dishInfo: 'Hot brewed coffee with a rich aroma.',
          price: '$2.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i8_fvdp8m.jpg",
          dishName: 'Coconut Water',
          dishInfo: 'Fresh coconut water served chilled.',
          price: '$3.49',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i3_tai7b8.jpg",
          dishName: 'Milkshake',
          dishInfo: 'Creamy milkshake with vanilla flavor.',
          price: '$6.49',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052152/i7_gfdtid.jpg",
          dishName: 'Soft Drink',
          dishInfo: 'Classic soda served with ice.',
          price: '$2.49',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i6_i6n4aj.jpg",
          dishName: 'Sparkling Water',
          dishInfo: 'Chilled sparkling water with lemon.',
          price: '$2.99',
        },
      ],
    SeaFood: [
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052090/i1_qphgkp.jpg",
          dishName: 'Lobster Tail',
          dishInfo: 'Grilled lobster tail served with butter.',
          price: '$24.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052125/i2_p4l78k.jpg",
          dishName: 'Fish Tacos',
          dishInfo: 'Fresh fish wrapped in soft tortillas.',
          price: '$12.49',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052150/i4_z696tk.jpg",
          dishName: 'Shrimp Cocktail',
          dishInfo: 'Chilled shrimp served with cocktail sauce.',
          price: '$10.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052150/i5_djemdb.jpg",
          dishName: 'Clam Chowder',
          dishInfo: 'Creamy soup with clams and potatoes.',
          price: '$7.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i8_fvdp8m.jpg",
          dishName: 'Oysters Rockefeller',
          dishInfo: 'Oysters topped with spinach and cheese.',
          price: '$15.49',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i3_tai7b8.jpg",
          dishName: 'Crab Cakes',
          dishInfo: 'Fried crab cakes with tartar sauce.',
          price: '$16.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052152/i7_gfdtid.jpg",
          dishName: 'Grilled Scallops',
          dishInfo: 'Scallops grilled with lemon butter sauce.',
          price: '$18.49',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i6_i6n4aj.jpg",
          dishName: 'Seafood Paella',
          dishInfo: 'Rice with seafood, saffron, and spices.',
          price: '$22.99',
        },
      ],
    Grill: [
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052090/i1_qphgkp.jpg",
          dishName: 'Grilled Chicken',
          dishInfo: 'Marinated chicken grilled to perfection.',
          price: '$12.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052125/i2_p4l78k.jpg",
          dishName: 'BBQ Ribs',
          dishInfo: 'Tender ribs glazed with BBQ sauce.',
          price: '$15.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052150/i5_djemdb.jpg",
          dishName: 'Grilled Salmon',
          dishInfo: 'Fresh salmon grilled with lemon seasoning.',
          price: '$18.49',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052150/i5_djemdb.jpg",
          dishName: 'Steak Frites',
          dishInfo: 'Juicy steak served with crispy fries.',
          price: '$21.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i8_fvdp8m.jpg",
          dishName: 'Vegetable Skewers',
          dishInfo: 'Grilled mixed veggies with spices.',
          price: '$10.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i3_tai7b8.jpg",
          dishName: 'Grilled Shrimp',
          dishInfo: 'Shrimp grilled with garlic butter.',
          price: '$14.99',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052152/i7_gfdtid.jpg",
          dishName: 'Chicken Satay',
          dishInfo: 'Chicken skewers with peanut dipping sauce.',
          price: '$11.49',
        },
        {
          image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i6_i6n4aj.jpg",
          dishName: 'Lamb Chops',
          dishInfo: 'Tender lamb chops grilled with rosemary.',
          price: '$19.99',
        },
      ],
    Deserts:
   [
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052090/i1_qphgkp.jpg",
      dishName: 'Chocolate Cake',
      dishInfo: 'Rich chocolate cake with creamy frosting.',
      price: '$6.99',
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052125/i2_p4l78k.jpg",
      dishName: 'Cheesecake',
      dishInfo: 'Classic cheesecake with berry topping.',
      price: '$7.49',
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052150/i4_z696tk.jpg",
      dishName: 'Apple Pie',
      dishInfo: 'Warm apple pie served with vanilla ice cream.',
      price: '$5.99',
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052150/i5_djemdb.jpg",
      dishName: 'Tiramisu',
      dishInfo: 'Layered coffee-flavored Italian dessert.',
      price: '$8.49',
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i8_fvdp8m.jpg",
      dishName: 'Lemon Sorbet',
      dishInfo: 'Refreshing lemon sorbet served cold.',
      price: '$4.99',
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i3_tai7b8.jpg",
      dishName: 'Panna Cotta',
      dishInfo: 'Creamy vanilla panna cotta with berries.',
      price: '$7.99',
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052152/i7_gfdtid.jpg",
      dishName: 'Brownie Sundae',
      dishInfo: 'Chocolate brownie topped with ice cream.',
      price: '$6.49',
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735052151/i6_i6n4aj.jpg",
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


