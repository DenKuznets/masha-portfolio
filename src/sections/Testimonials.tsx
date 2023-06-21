import styled from "styled-components";

const TestimonialsStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 57px 0;
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
    }
`;

const slidesList: JSX.Element[] = [];
for (let i = 0; i < 10; i++) {
    slidesList.push(
        <div key={i}>
            <div className="card"></div>
        </div>
    );
}

const Testimonials = () => {
    return (
        <TestimonialsStyled id="testimonials">
            <h2>Testimonials</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.
            </p>
            <div className="carousel">{slidesList}</div>
        </TestimonialsStyled>
    );
};

export default Testimonials;
