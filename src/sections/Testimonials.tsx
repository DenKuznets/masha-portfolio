import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import styled from "styled-components";

const TestimonialsStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 14px;
    h2 {
        margin-bottom: 7px;
    }
    p {
        margin-bottom: 60px;
        max-width: 1164px;
        text-align: center;
        line-height: 1.4;
    }
    .card {
        width: 100%;
        height: 300px;
        background-color: red;

        .swiper-button-next {
        }
    }

    .carousel {
        width: 100%;
    }
`;

const Testimonials = () => {
    return (
        <TestimonialsStyled>
            <h2>Testimonials</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.
            </p>
            <div className="carousel">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={4}
                    // onSlideChange={() => console.log("slide change")}
                    // onSwiper={(swiper) => console.log(swiper)}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="card"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div className="card"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div className="card"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div className="card"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div className="card"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div className="card"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div className="card"></div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </TestimonialsStyled>
    );
};

export default Testimonials;
