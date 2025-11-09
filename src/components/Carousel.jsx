import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'


function Carousel ({ gallery }) {
  console.log('Gallery props received:', gallery) // Debug log
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
      breakpoints={{
        // Responsive 
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {gallery.map((photo) => (
        <SwiperSlide key={photo.id} className="bg-sky-800 rounded-lg overflow-hidden">
          <motion.div
            className="aspect-square cursor-pointer"
            whileHover={{ scale: 1.05}}
            transition={{ duration: .3}}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {e.target.src= "https://placehold.co/400x400/0c4a6e/7dd3fc?text=Foto"}}
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel