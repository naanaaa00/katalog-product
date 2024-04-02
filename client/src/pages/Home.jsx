import React from 'react'
import { Link, useLocation } from "react-router-dom";
import CarouselBisa from '../components/CarouselBisa';




const Home = () => {


  const posts = [
    {
      id: 1,
      title: "Cleansing Balm Make Up Remover",
      desc: "Skintific White Truffle Cleansing Essence",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/20230222151046DBF0101E480E63F6_s.jpg",
    },
    {
      id: 2,
      title: "White Truffle Cleansing Essence",
      desc: "Skintific White Truffle Cleansing Essence",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/2023022214295531640C848AAAD99D_s.jpg",
    },
    {
      id: 3,
      title: "Amino Acid Ultra-gentle Cleansing Mousse",
      desc: "SKINTIFIC Amino Acid Ultra Gentle Cleansing Mousse",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/20230222142504A02B48276174C6BC_s.jpg",
    },
    {
      id: 4,
      title: "SOOTHING TONER",
      desc: "5X Ceramide Soothing Toner",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/2022021111461738384C8DB2C39EC1_s.jpg",
    },
    {
      id: 5,
      title: "5% Aha Bha Pha Exfoliating Toner",
      desc: "5% Aha Bha Pha Exfoliating Toner Face Eksfoliasi wajah Glow and Smooth Skin with Niacinamide",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/2023022214463512E704865ED35D7B_s.jpg",
    },
    {
      id: 6,
      title: "Gentle-A Retinol Renewal Moisturizer",
      desc: "",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/20230222150856C41466AF829BB2F3_s.jpg",
    },
    {
      id: 7,
      title: "MSH Niacinamide Brightening Moisturizer",
      desc: "Skintific MSH Niacinamide Brightening Moisture Gel",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/202302221441150BFD6803C612307B_s.jpg",
    },
    {
      id: 8,
      title: "360° Crystal Massager Lifting Eye Cream",
      desc: "360° Crystal Massager Lifting Eye Cream",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/20211014152044094BCEA333250818_s.jpg",
    },
    {
      id: 9,
      title: "5X Ceramide Barrier Moisture Gel",
      desc: "5X Ceramide Barrier Repair Moisturize Gel",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/2021092217152822DD4AE39EDF5377_s.jpg",
    },
    {
      id: 10,
      title: "Truffle Biome Skin Reborn Cream Gel Moisturizer",
      desc: "Truffle Biome Skin Reborn Cream Gel Moisturizer",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/202302221403081E3F247FC089E288_s.jpg",
    },
    {
      id: 11,
      title: "Gentle-A Retinol Renewal Serum",
      desc: "SKINTIFIC Retinol Serum Anti Aging 5X Ceramide Gentle A Renewal Essence",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/202302221505426C929EAB45EE31A2_s.jpg",
    },
    {
      id: 12,
      title: "FACIAL OIL",
      desc: "BARRIER BOOSTER FACIAL OIL",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/2022061510534726675EFB49830068_s.jpg",
    },
    {
      id: 13,
      title: "4D Pure Hyaluronic Acid Hydrating Serum",
      desc: "4D Hyaluronic Acid Hydrating Serum",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/20230222132312F1EAF5DAE00295E6_s.jpg",
    },
    {
      id: 14,
      title: "2% Salicylic Acid Anti Acne Serum",
      desc: "Acne Spot Treatment Facial Gel with 2% Salicylic Acid Brightening Face Serum for Repair Skin Barrier",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/2023022214564491C91EC55789F7E2_s.jpg",
    },

    {
      id: 15,
      title: "Salicylic Acid Acne Spot Treatment Gel",
      desc: "SKINTIFIC Salicylic Acid BHA Acne Spot treatment",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/20210922171918CF2C285EA0F515CD_s.jpg",
    },
    {
      id: 16,
      title: "4D Hyaluronic Acid Barrier Essence Toner",
      desc: "4D Hyaluronic Acid Barrier Essence Toner",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/202109221717016EA0C8563DEFF040_s.jpg",
    },
    {
      id: 17,
      title: "Alaska Volcano Clay Stick",
      desc: "Alaska Volcano Pore Detox Clay Stick",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/202302221502366CB77EFA275AA6A9_s.jpg",
    },
    {
      id: 18,
      title: "Alaska Volcano Clay Mask",
      desc: "",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/202302221501042A46A6FD378F50C7_s.jpg",
    },
    {
      id: 19,
      title: "5X Ceramide Soothing Mask",
      desc: "Skintific 5X Ceramide Soothing & Repairing Mask",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/202302221444404B7077F9E5A5E59E_s.jpg",
    },
    {
      id: 20,
      title: "Mugwort Acne Clay Stick",
      desc: "Mugwort Acne Clay Stick",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/20230222134107ADD4EDF49CC8DB6B_s.jpg",
    },
    {
      id: 21,
      title: "Mugwort Mask",
      desc: "SKINTIFIC Mugwort Anti Acne Clay Mask mengandung ekstrak Mugwort dengan kualitas terbaik untuk melawan breakout agar kulit lebih cerah dan ceria.",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/202302221716416FA57A3E2D627C16_s.jpg",
    },
    {
      id: 22,
      title: "All Day Light Sunscreen Mist",
      desc: "SKINTIFIC All Day Light Sunscreen Mist SPF50 PA++++ Sunscreen Spray Anti UV Wajah/Body Spray 50ml",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/20230222142152F583533244AE24B9_s.jpg",
    },
    {
      id: 23,
      title: "SERUM SUNSCREEN",
      desc: "Barrier Protect Serum Sunscreen",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/20230222132941A9EE01EEC9E6ECE5_s.jpg",
    },
    {
      id: 24,
      title: "10% Niacinamide Brightening Serum",
      desc: "SKINTIFIC 10% NIACINAMIDE WHITENING GLOWING SKIN SERUM",
      img: "https://img-for-hk.wds168.cn/comdata/83820/product/20230222143933D2E8FC8CD5500458_s.jpg",
    },
    
  ];
  

  return (
    <div className="home">
   <CarouselBisa />
      <div className="posts">
      <h1>PRODUCT</h1>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <br/>
                <button onClick={() => window.location.href = '/simpan'}>
                  REVIEW
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
