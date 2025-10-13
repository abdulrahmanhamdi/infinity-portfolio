// src/components/sections/TestimonialsSection.jsx
import { testimonialsData } from '../../data/testimonials';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';

// 1. Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <FadeInWhenVisible>
          <h2 className="section-title text-center">What <span>Students Say</span></h2>
          
          <Swiper
            // 2. Add Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            className="testimonial-swiper"
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index} className="testimonial-slide">
                <p>“{testimonial.text}”</p>
                <h4 className="name">{testimonial.name}</h4>
                <span className="designation">{testimonial.designation}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}