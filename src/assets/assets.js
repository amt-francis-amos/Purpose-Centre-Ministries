import logo from './logo.png'
import heroImg from './Hero-img.jpg'
import missionImg from './mission.jpg'
import visionImg from './vision.png'
import slider2 from './slider-2.jpg'
import slider3 from './slider-3.jpg'
import menMinistryImg from './men.jpg'
import womenMinistryImg from './women.jpg'
import youthMinistryImg from './youth.jpg'
import childrenMinistryImg from './children.jpg'
import aboutImg from './bg-2.jpg'
import amoImg from './amo.png'
import retreatImg from './retreat.jpg'
import  partnerImg from './partner.jpg'
import  heroBg from './hero.jpg'


export const assets = {
    retreatImg,
    heroBg,
    partnerImg,
    aboutImg,
    amoImg,
    logo,
    heroImg,
    missionImg,
    visionImg,
    slider2,
    slider3,
    menMinistryImg,
    womenMinistryImg,
    youthMinistryImg,
    childrenMinistryImg
}



export const images = [
     assets.heroImg,
     assets.slider2,
     assets.slider3
  ]; 
  

  export const ministries = [
    {
      name: "Men's Ministry",
      image: assets.menMinistryImg,
      description:
        "Our mission is to build men’s faith, relationships and ministry, through resources we obtain, events we produce and ongoing leadership development. Create an atmosphere of support, encouragement and prayer for the pastor that is driven by the Men Ministry.",
    },
    {
      name: "Women's Ministry",
      image: assets.womenMinistryImg,
      description:
        "The women's   Ministry seeks to glorify God through studying the word of God, supporting the Pastor's vision, working with other Ministries of the church, exemplifying love for one another, evangelising, raising women leaders  and building godly.",
    },
    {
      name: "Youth Ministry",
      image: assets.youthMinistryImg,
      description:
        "Seeks to provide guidance and support for the youth of purpose as they navigate through the most challenging part of their development and as they seek to grow in their walk with Christ. Hence making them Christ-like leaders who will reach their full potential in serving God, the Church and Humanity.",
    },
    {
      name: "Children's Ministry",
      image: assets.childrenMinistryImg,
      description:
        "Seeks to build Childrens faith, relationships and ministry, through resources we obtain, events we produce and ongoing childhood development. Create an atmosphere of support, encouragement and prayer for the children that are within the Ministry.",
    },
  ];
