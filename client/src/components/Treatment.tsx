import { Box, Flex, Image, Text } from "@chakra-ui/react";

import TreatmentCard from "./TreatmentCard";

const Treatment = () => {
  return (
    <Box h="auto" p="10px" m="10px" mx="auto" bg="gray.50">
      <Box w="90%" mx="auto" mb="5rem">
        <Flex direction="column" justify="center" align="center" my="5rem">
          <Text
            fontWeight={700}
            fontSize="35px"
            opacity="0.8"
            maxW="650px"
            textAlign="center"
            mb="20px"
          >
            We Provide You The Best Treatment In Resonable Price
          </Text>
          <Box>
            <Image src="img/section-img.png" filter="auto" />
          </Box>
          <Text mt="1rem" fontSize="18px" fontWeight="400" opacity="0.6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
            aliquet. pretiumts
          </Text>
        </Flex>

        <Flex justify="space-evenly">
          <TreatmentCard
            heading=" Plastic Suggery"
            listText="Lorem ipsum dolor sit amet."
            price="$199"
            icon={
              <i
                className="icofont icofont-aids"
                style={{
                  fontSize: "4rem",
                  opacity: "0.6",
                  color: "blue",
                }}
              ></i>
            }
          />
          {/* <i class="icofont-scissors"></i> */}
          <TreatmentCard
            heading="Teeth Whitening"
            listText="Lorem ipsum dolor sit amet."
            price="$199"
            icon={
              <i
                className="icofont icofont-tooth"
                style={{
                  fontSize: "4rem",
                  opacity: "0.6",
                  color: "blue",
                }}
              ></i>
            }
          />
          <TreatmentCard
            heading=" Heart Suggery"
            listText="Lorem ipsum dolor sit amet."
            price="$199"
            icon={
              <i
                className="icofont icofont-heart-beat"
                style={{
                  fontSize: "4rem",
                  opacity: "0.6",
                  color: "blue",
                }}
              ></i>
            }
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Treatment;
