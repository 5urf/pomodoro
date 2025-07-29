import { motion } from "framer-motion";
import styled from "styled-components";
import Setting from "./Setting";

const StyledHeader = styled(motion.header)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled(motion.h1)`
  font-size: 4.8rem;
  font-weight: 700;

  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #e2e8f0 25%,
    #c084fc 50%,
    #f472b6 75%,
    #ffffff 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  animation: gradientFlow 6s ease-in-out infinite;

  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

  @keyframes gradientFlow {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

const headerVariants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Header = () => {
  return (
    <StyledHeader variants={headerVariants} initial='initial' animate='animate'>
      <Title variants={titleVariants} initial='initial' animate='animate'>
        Pomodoro
      </Title>
      <Setting />
    </StyledHeader>
  );
};

export default Header;
