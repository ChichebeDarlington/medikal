import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Hero from "../../components/Header";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Hero />
      <hr />
      <Menu />
      <Outlet />
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
