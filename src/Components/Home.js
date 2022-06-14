import React from "react";
import './Home.css'
import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Home() {
  return (
    <>
      <div className="home">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[ Autoplay, Navigation ]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/RewardsMela/DesktopHero_3000x1200_Flash_rewards._CB634467153_.jpg"
            alt=""
            />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Samsung/BAU/M53_5G_new/D43355364_IN_WLME_Samsung_Galaxy_M53_5G_DesktopTallHero_3000x1200-Recovered._CB634717319_.jpg"
            alt=""
            />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/lnandit/IphoneBAU/D36879020_IN_WLD_iPhone-13_series_BAUTallHero_3000x1200._CB634461237_.jpg"
            alt=""
            />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Samsung/BAU/S20FE_New/_DesktopTallHero_3000x1200._CB634716928_.jpg"
            alt=""
            />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/PC_Hero_3000x1200._CB643589305_.jpg"
            alt=""
            />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/realme/narzo50series/Launch/D45041229_Tall_Hero_3000x1200-wo._CB634718762_.jpg"
            alt=""
            />
        </SwiperSlide>
        </Swiper>
      </div>
      <div className='product__list'>    
         <div className='home__row'>
            <Product
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={4.6}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
            <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
            </div>

        <div className='home__row'>
            <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            
        </div>

        <div className='home__row'>
            <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
        </div>
        </div>
      </>      

  );
}

export default Home;
