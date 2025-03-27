import { motion } from "framer-motion";
import styled from "styled-components";
import PlayIcon from "../assets/PlayIcon";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Btn = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.accentColor};
  border: none;
  border-radius: 50%;
`;

const CtrlButton = () => {
  return (
    <Container>
      <Btn>
        <PlayIcon />
        {/* <PauseIcon /> */}
      </Btn>
    </Container>
  );
};

export default CtrlButton;
