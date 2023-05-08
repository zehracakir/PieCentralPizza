import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Container } from "@mui/material";

function SlideComponent({ images }) {
  return (
    <Container maxWidth={'xl'}>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((step) => (
          <SwiperSlide key={step.label} >

            <Box
              component="img"
              sx={{

                display: 'block',
                maxWidth: '100%',
                overflow: 'hidden',
                width: '100%',
              }}
              src={step.imgPath}
              alt={step.label}
            />

          </SwiperSlide>
        ))}


      </Swiper>
    </Container>
  );
}
export default SlideComponent