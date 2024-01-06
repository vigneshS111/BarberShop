import haircut from "../assets/haircut.png";
import shaving from "../assets/shaving.png";
import trim from "../assets/trim.png";
import kids from "../assets/kids.png";
import style1 from "../assets/style1.png";
import style2 from "../assets/style2.png";
import style3 from "../assets/style3.png";
import style4 from "../assets/style4.png";
import style5 from "../assets/style5.png";
import style6 from "../assets/style6.png";
import rdj from "../assets/rdj.jpg";
import hemsworth from "../assets/hemsworth.jpg"
import barber1 from "../assets/barber1.jpg"
import barber2 from "../assets/barber2.jpg"
import barber3 from "../assets/barber3.jpg"
import barber4 from "../assets/barber4.jpg"
import barber5 from "../assets/barber5.jpg"
import barber6 from "../assets/barber6.jpg"
export const navLinks = [
    {
      id: "home",
      title: "Home",
      to:'/'
    },
    {
      id: "ourTeam",
      title: "Our Team",
      to:'/ourTeam'
    },
    {
      id: "reviews",
      title: "Reviews",
      to:'/reviews'
    },
   
  ];
  
  export const profile=[
    {
      title:"profile",
      to:'/profile'
    },
  ];

  export const branchInfo=[{
    location:"​254 W 27ST ST, NEW YORK, NY 10011",
    phoneNo:"​(212) 123-4567"
  },{
    location:"​341 W 11ST ST, NEW YORK, NY 10022",
    phoneNo:"​(212) 123-4567"
  }]; 

  export const pricingChart=[
    {
        title:'Regular Haircut', 
       
        price:'34',
    },
    {
        title:'Haircut + Royal Shave', 
       
        price:'60',
    },
    {
        title:'Beard Trim Machine', 
       
        price:'23',
    },
    {
        title:'Haircut + Facial', 
       
        price:'50',
    },
    {
        title:'Royal Shave', 
       
        price:'35',
    },
    {
        title:'Haircut + Beard Trim', 
       
        price:'65',
    },
    {
        title:'Beard + Facial', 
       
        price:'55',
    },
    {
        title:"Men's Facial",
        price:'25',
    }


  ];

  export const services=[
    {
      title:"Hair Cut",
      image:haircut
    },
    {
      title:"Shaving",
      image:shaving
    },
   
    {
      title:"Beard Trim",
      image:trim
    },
    {
      title:"Kids Haircut",
      image:kids
    },
    

  ];

  export const hairStyles=[style1,style2,style3,style4,style5,style6];

  export const TopComments=[{
    name:"Robert Downey JR",
    image:rdj,
    comment:"Just had an amazing experience at Your barbershop ! The vibes are trendy, the barbers are skilled artists, and the cut was spot-on. They not only understood my style but elevated it with expert precision. The attention to detail and friendly staff made the visit memorable.",
    rating:"4.5"

  },
  {
    name:"Chris Hemsworth",
    image:hemsworth,
    comment:"Recently tried here and it's a game-changer! From the stylish atmosphere to the skilled barbers, every detail was on point. The haircut was a masterpiece—precise, tailored, and the products used were top-notch. The friendly staff and commitment to hygiene made the experience outstanding.",
    rating:"5.0"
  }];

  export const barbers=[
    {
      name:"mark brown",
      role:"Owner",
      abt:"Mark is a seasoned barber with a unique flair for turning haircuts into works of art.",
      image:barber1
    },
    {
      name:"david villeges",
      role:"Barber",
      abt:"David is a master of classic barbering techniques.He delivers timeless haircuts that stand the test of trends.",
      image:barber2
    },
    {
      name:"clayton lane",
      role:"Barber",
      abt:"Clayton is not just a barber.he transforms every client's facial hair into a masterpiece. ",
      image:barber3
    },
    {
      name:"dan spinello",
      role:"Barber",
      abt:"Dan brings a unique twist to the barbershop experience, combining his love for the outdoors with his passion.",
      image:barber4
    },

    {
      name:"Robert fifield",
      role:"Barber",
      abt:"Robert seeking a polished and precise look turn to Dexter for his expertise in creating hairstyles.",
      image:barber5
    },
    {
      name:"dwight atkins",
      role:"Barber",
      abt:"Dwight is the epitome of laid-back coolness in the barber's chair.He creates an environment where clients feel at ease. ",
      image:barber6
    },
  ]