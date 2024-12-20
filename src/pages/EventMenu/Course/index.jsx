import MenuCard from "../MenuCard"
import {useRef,useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css"; 
const menuData = [
    {
      id: 1,
      name: "Paneer Tikka",
      description:
        "A flavorful Indian dish made with marinated paneer grilled to perfection.",
      price: "$4.55",
      image: "./paneer_tikka.png",
    },
    {
      id: 2,
      name: "Chicken Biryani",
      description:
        "Aromatic rice dish cooked with tender chicken and a blend of spices.",
      price: "$6.99",
      image: "./chicken_biryani.png",
    },
    {
      id: 3,
      name: "Veg Manchurian",
      description:
        "Crispy veggie balls in a tangy and spicy Manchurian sauce.",
      price: "$5.25",
      image: "./veg_manchurian.png",
    },
    {
          id: 4,
          name: "Masala Dosa",
          description:
            "A crispy South Indian crepe filled with spicy potato masala, served with chutneys.",
          price: "$3.99",
          image: "./masala_dosa.png",
        },
        {
          id: 5,
          name: "Tandoori Chicken",
          description:
            "Juicy chicken marinated in a spiced yogurt mixture and cooked in a clay oven.",
          price: "$8.50",
          image: "./tandoori_chicken.png",
        },
        {
          id: 6,
          name: "Hakka Noodles",
          description:
            "Stir-fried noodles with vegetables and a savory blend of sauces.",
          price: "$4.75",
          image: "./hakka_noodles.png",
        },
        {
          id: 7,
          name: "Gulab Jamun",
          description:
            "Soft, round dumplings soaked in a rose-flavored sugar syrup.",
          price: "$2.99",
          image: "./gulab_jamun.png",
        },
        {
          id: 8,
          name: "Mutton Rogan Josh",
          description:
            "A rich and aromatic curry made with tender pieces of mutton.",
          price: "$10.25",
          image: "./mutton_rogan_josh.png",
        },
        {
          id: 9,
          name: "Palak Paneer",
          description:
            "Paneer cubes cooked in a creamy spinach sauce, flavored with Indian spices.",
          price: "$6.45",
          image: "./palak_paneer.png",
        },
        {
          id: 10,
          name: "Fish Tikka",
          description:
            "Succulent fish chunks marinated with spices and grilled to perfection.",
          price: "$7.50",
          image: "./fish_tikka.png",
        },
        {
          id: 11,
          name: "Aloo Paratha",
          description:
            "A soft and flaky flatbread stuffed with a spiced potato filling, served with yogurt.",
          price: "$3.25",
          image: "./aloo_paratha.png",
        },
        {
          id: 12,
          name: "Butter Chicken",
          description:
            "Chicken cooked in a creamy tomato-based sauce with a hint of spices.",
          price: "$9.75",
          image: "./butter_chicken"
        }      
  ];
  
const Course=(props)=>{
    const scrollRef=useRef(null);
    useEffect(() => {
      AOS.init({
          duration: 500, 
      });
  }, []);
    function scrollEvent(direction){
        if (scrollRef.current) {
            if(direction){
                scrollRef.current.scrollBy({ left: 270, behavior: "smooth" });
            }
            else{
                scrollRef.current.scrollBy({ left: -270, behavior: "smooth" });
            }
          }
    }
    return(
        <div className="menu-main"
        data-aos="fade-up">
        <h1 >{props.name}</h1>
        <div className="starters" ref={scrollRef}>
            {menuData.map((element)=>{
                return (
                    <MenuCard id={element.id} name={element.name} price={element.price} description={element.description}/>
                )
            })}
        </div>
        <div className="scroll-buttons"> 
            <button onClick={()=>(scrollEvent(0))}>{'<'}</button>
            <button onClick={()=>(scrollEvent(1))}>{'>'}</button>
        </div>
        <hr/>
    </div>
    )
}
export default Course;