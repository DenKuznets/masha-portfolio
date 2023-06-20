import styled from "styled-components";

const ServicesStyled = styled.section`
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
    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        @media only screen and (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media only screen and (max-width: 550px) {
            grid-template-columns: repeat(1, 1fr);
        }
        li {
            max-width: 327px;
            min-height: 350px;
            background-color: ${({ theme }) => theme.colors.palePink};
            padding: 52px 17px 35px;
            img {
                margin-bottom: 20px;
            }
            h3 {
                margin-bottom: 20px;
            }
            p {
                font-weight: 400;
                font-size: 1.25rem;
                line-height: 1.23;
                letter-spacing: 0.03em;
                color: #000000;
                text-align: left;
                margin-bottom: 0;
            }
        }
    }
`;

const cards = [
    {
        img: "serv-1.svg",
        header: "UI/UX Design",
        text: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
        img: "serv-2.svg",
        header: "App Design",
        text: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
        img: "serv-3.svg",
        header: "Graphic Design",
        text: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
        img: "serv-4.svg",
        header: "Web Design",
        text: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
];

const cardsList = cards.map((card, index) => (
    <li key={index}>
        <img src={`./images/${card.img}`} />
        <h3>{card.header}</h3>
        <p>{card.text}</p>
    </li>
));

const Services = () => {
    return (
        <ServicesStyled id="services">
            <h2>Services</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.
            </p>
            <ul>{cardsList}</ul>
        </ServicesStyled>
    );
};

export default Services;
