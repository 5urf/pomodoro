import { motion } from "framer-motion";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Minute = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 30rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.accentColor};
`;

const Second = styled(Minute)``;

const Text = styled.p`
  font-size: 4.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
`;

const Colon = styled(Text)`
  opacity: 0.5;
`;

const Timer = () => {
  return (
    <Container>
      <Minute>
        <Text>24</Text>
      </Minute>
      <Colon>:</Colon>
      <Second>
        <Text>59</Text>
      </Second>
    </Container>
  );
};

export default Timer;
