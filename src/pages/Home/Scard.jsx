// import React, { useEffect } from "react";
// import b1 from "../../assets/b1.avif";
// import b2 from "../../assets/b2.avif";
// import b3 from "../../assets/b3.avif";
// // import '../../index.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 

// const Scard = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); 
//   }, []);

//   const divData = [
//     {
//       image: b1,
//       heading: "Social Event",
//       subtext:
//         "Join us for a fun and engaging social event filled with activities and networking opportunities for everyone.",
//     },
//     {
//       image: b2,
//       heading: "Corporate Event",
//       subtext:
//         "A professional setting where industry leaders and companies come together to share insights and opportunities.",
//     },
//     {
//       image: b3,
//       heading: "Special Event",
//       subtext:
//         "A unique event designed for special occasions, providing a memorable experience for all attendees.",
//     },
//   ];

//   return (
//     <div className="flex flex-wrap justify-center gap-8 py-6 px-6 overflow-hidden">
//       {divData.map((item, index) => (
//         <div
//           key={index}
//           className="w-full sm:w-[48%] lg:w-[30%] flex flex-col items-center"
//         >
//           <div
//             className="min-h-[350px] flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden relative"
//             style={{
//               backgroundImage: `url(${item.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//             <div className="p-6 flex flex-col justify-center items-center text-center gap-5 z-10 w-full h-full">
//               <h1 className="font-bold text-3xl text-white">{item.heading}</h1>
//               <p className="text-white text-md leading-relaxed">{item.subtext}</p>
//               <button
//                 className="border px-4 py-2 transition-all duration-200 border-[#f1a986] text-[#f1a986] hover:bg-[#f1a986] hover:text-white rounded-md"
//                 data-aos="zoom-in" 
//                 data-aos-delay="200" 
//               >
//                 Read More
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Scard;
