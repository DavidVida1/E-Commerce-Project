import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import HeroVideo from "../assets/watchBanner2.mp4";

const Home = () => {
  return (
    <HomeContainer>
      <aside className="heroText">
        <div className="logo">AllStar</div>
        <h1 className="heroSubText">Stay Active, Stay Timed</h1>
        <a href="*" className="heroButton">
          Discover
        </a>
      </aside>
      <video
        className="bannerHero"
        src={HeroVideo}
        autoPlay
        loop
        muted
        alt="hero-video"
        loading="lazy"
      />
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  position: relative;
  background: var(--bg-home);
  width: 100vw;
  height: 100vh;

  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-mask-image: linear-gradient(transparent 0, #000000 8%);
    mask-image: linear-gradient(transparent 0, #000000 9%);
    background-repeat: no-repeat;
    background-size: cover;
  }

  & .heroText {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 50px;
    left: 50px;
    z-index: 30;
    color: var(--font-white);
    text-transform: uppercase;
    text-shadow: 0 0 10px var(--font-sdw);
    letter-spacing: 5px;

    & .logo {
      font-family: var(--font-heading-title);
      font-style: italic;
      font-weight: bold;
      font-size: clamp(2rem, 4.2vw, 3rem);
    }

    & .heroSubText {
      font-size: clamp(5rem, 4.2vw, 6rem);
      font-weight: var(--font-weight-500);
    }

    & .heroButton {
      width: fit-content;
      height: fit-content;
      margin-top: 40px;
      font-size: var(--font-size-18);
      padding: 2% 18%;
      border-radius: var(--radius-button);
      background-color: var(--btn-purple);
      border: 2px solid var(--purple);
      box-shadow: 0 0 10px var(--font-sdw);
      transition: background-color 0.3s linear;

      &:hover {
        border: 2px solid var(--white);
        background-color: var(--btn-black);
      }
    }
  }
`;
export default Home;
