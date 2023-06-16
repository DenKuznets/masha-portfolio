import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import styled from "styled-components";

const TestimonialsStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 14px;
    background: ${({ theme }) => theme.colors.smoothRed};
    color: ${({ theme }) => theme.colors.creamyWhite};

    h2 {
        margin-bottom: 7px;
    }
    p {
        margin-bottom: 60px;
        max-width: 1164px;
        text-align: center;
        line-height: 1.4;
    }

    .carousel {
        width: 100%;
        max-width: 1404px;
        padding: 0 50px;
        .card {
            width: 100%;
            height: 300px;
            background-color: aqua;
            border-radius: 10px;
        }

        .swiper-pagination-bullet {
            height: 14px !important;
            width: 41px !important;
            border-radius: 23px !important;
            background: ${({ theme }) => theme.colors.creamyWhite} !important;
            opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
            opacity: 0.6 !important;
        }
        .custom-pagination {
            display: flex;
            justify-content: center;
            padding: 20px 0;
        }

        .custom-navigation {
            display: flex;
            height: 0;
            justify-content: space-between;
            position: relative;
        }

        .custom-prev-btn {
            background-image: url("./images/prev-btn.svg");
            background-repeat: no-repeat;
            height: 24px;
            z-index: 10;
            flex-basis: 24px;
            position: relative;
            top: -210px;
            left: -50px;
        }
        
        .custom-next-btn {
            flex-basis: 24px;
            background-image: url("./images/next-btn.svg");
            background-repeat: no-repeat;
            cursor: pointer;
            height: 24px;
            position: relative;
            top: -210px;
            right: -50px;
        }
    }
`;

const slidesList: JSX.Element[] = [];
for (let i = 0; i < 10; i++) {
    slidesList.push(
        <SwiperSlide key={i}>
            <div className="card"></div>
        </SwiperSlide>
    );
}

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
                    spaceBetween={31}
                    slidesPerView={4}
                    // onSlideChange={() => console.log("slide change")}
                    // onSwiper={(swiper) => console.log(swiper)}
                    navigation={{
                        nextEl: ".custom-next-btn",
                        prevEl: ".custom-prev-btn",
                    }}
                    pagination={{ clickable: true, el: ".custom-pagination" }}
                    breakpoints={{
                        1: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: 2,
                        },
                        750: {
                            slidesPerView: 3,
                        },
                        1000: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {slidesList}
                </Swiper>
                <div className="custom-pagination" />
                <div className="custom-navigation">
                    <div className="custom-prev-btn"></div>
                    <div className="custom-next-btn"></div>
                </div>
            </div>
        </TestimonialsStyled>
    );
};

export default Testimonials;
