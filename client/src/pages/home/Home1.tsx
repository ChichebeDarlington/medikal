import { Box } from "@chakra-ui/react";
import Hero from "../../components/Hero";
import Schedule from "../../components/Schedule";
import Features from "../../components/Features";
import FunFact from "../../components/FunFact";
import WhyChoose from "../../components/WhyChoose";
import CallToAction from "../../components/CallToAction";
import Portfolio from "../../components/Portfolio";
import StartService from "../../components/StartService";
import Testimonial from "../../components/Testimonial";
import Departments from "../../components/Departments";
import Treatment from "../../components/Treatment";
import Doctors from "../../components/doctors/Doctors";
import Blogs from "../../components/Blogs";
import Overlay from "../../components/Overlay";
import Appointments from "../../components/Appointment";
import Newsletter from "../../components/Newsletter";

const Home1 = () => {
  return (
    <Box>
      <Hero />
      <Schedule />
      <Features />
      <FunFact />
      <WhyChoose />
      <CallToAction />
      <Portfolio />
      <StartService />
      <Testimonial />
      <Departments />
      <Treatment />
      <Doctors />
      <Blogs />
      <Overlay />
      <Appointments />
      <Newsletter />
    </Box>
  );
};

export default Home1;
