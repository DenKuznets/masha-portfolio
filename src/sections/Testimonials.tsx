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
            &-active {
                opacity: 0.6 !important;
            }
        }
        .custom-pagination {
            display: flex;
            justify-content: center;
            padding: 20px 0;
        }

        .custom-nav {
            display: flex;
            height: 0;
            justify-content: space-between;
            position: relative;
            &-btn {
                background-repeat: no-repeat;
                height: 24px;
                z-index: 10;
                flex-basis: 24px;
                position: relative;
                cursor: pointer;
                &-prev {
                    background-image: url("./images/prev-btn.svg");
                    top: -210px;
                    left: -50px;
                }
                &-next {
                    background-image: url("./images/next-btn.svg");
                    top: -210px;
                    right: -50px;
                }
            }
        }

        .swiper-button-disabled {
            opacity: 0.4;
            cursor: not-allowed;
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
                        nextEl: ".custom-nav-btn-next",
                        prevEl: ".custom-nav-btn-prev",
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
                <div className="custom-nav">
                    <div className="custom-nav-btn custom-nav-btn-prev"></div>
                    <div className="custom-nav-btn custom-nav-btn-next"></div>
                </div>
            </div>
        </TestimonialsStyled>
    );
};

export default Testimonials;
