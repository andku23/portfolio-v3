import { FC } from "react";

import { Center, Container, Heading, Image, HStack, Stack, Flex, Box, IconButton, Button } from "@chakra-ui/react";

import { Content, configs, useContent, MarkdownFile } from "shared/content/Content";
import { Socials } from "shared/socials/Socials";
import { WorkPageId } from "utils/useScroll";
import { ChevronDownIcon } from "utils/Icons";
import { PrimaryColors } from "../../theme/colors/Colors";

export const Landing: FC = () => {
    const content = useContent(MarkdownFile.Landing);

    const scrollIntoView = () => {
        const featuredHeader = document.getElementById(WorkPageId);

        if (featuredHeader) {
            featuredHeader.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box id="page-landing"  style={{
            backgroundColor: PrimaryColors["200"],
            paddingLeft: '5%',
            paddingRight: '5%',
            paddingTop: '5%',
        }}>
            <Center pb={{ base: 16, md: 32 }}>
                <HStack spacing="16" justifyContent="space-between" alignItems="flex-start">

                    <Container
                        alignItems="center"
                        flex="0.4"
                        display={{ base: "none", lg: "block" }}
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <picture>
                            <source type="image/jpeg" src={configs.landing.jpg}></source>
                            <Image borderRadius="xl" src={configs.landing.jpg} alt={`face-cover-image`} />
                        </picture>
                    </Container>
                    <Stack flex={{ base: "1", lg: "0.6" }} spacing="16">
                        <Stack spacing="8">
                            <Heading
                                fontSize={{ base: "5xl", md: "7xl" }}
                                lineHeight="1"
                                data-aos="fade-down"
                                data-aos-delay="400"
                            >
                                {configs.landing.headline}
                            </Heading>
                            <Content data-aos="fade-up" data-aos-delay="500" fontSize="lg">
                                {content.landing}
                            </Content>
                        </Stack>

                        <Socials delay={1000} />
                    </Stack>
                </HStack>
            </Center>
        </Box>
    );
};
