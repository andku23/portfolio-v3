import { FC } from "react";

import { Button, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { ArrowRightIcon, GitHubIcon, LinkIcon } from "utils/Icons";
import { open } from "utils/Functions";
import { configs } from "../content/Content";
import {
    FeaturedProjectCard,
    ImagePosition,
} from "../../pages/featured-projects/featured-project-card/FeaturedProjectCard";

interface GitHubButtonProps {
    sizzle?: string;
    display?: any;
}

interface ReadMoreProps {
    readMore?: string;
}

interface LiveDemoProps {
    display?: any;
    name: string;
    url: string;
}

export interface LiveDemoButtonProps {
    name: string;
    url: string;
}

interface LiveDemoUpperProps {
    demo?: LiveDemoButtonProps[];
    display?: any;
}

interface Props extends GitHubButtonProps, ReadMoreProps, LiveDemoUpperProps {}

export const ReadMore: FC<ReadMoreProps> = ({ readMore }) => {
    return readMore ? (
        <Button
            data-aos="fade"
            data-aos-offset="200"
            variant="link"
            colorScheme="black"
            rightIcon={<ArrowRightIcon fontSize="16pt" />}
            onClick={() => open(readMore)}
        >
            Read More
        </Button>
    ) : null;
};

export const SizzleReel: FC<GitHubButtonProps> = ({ sizzle, display }) => {
    const as = useBreakpointValue({ base: IconButton, lg: Button });

    return sizzle ? (
        <Button
            data-aos="fade"
            data-aos-delay="400"
            as={as}
            variant="secondary"
            py="5"
            display={display}
            onClick={() => open(sizzle)}
        >
            Overview
        </Button>
    ) : null;
};

export const LiveDemo: FC<LiveDemoProps> = ({ name, url, display }) => {
    const as = useBreakpointValue({ base: IconButton, lg: Button });

    return (
        <Button
            data-aos="fade"
            data-aos-delay="200"
            as={as}
            display={display}
            leftIcon={<LinkIcon fontSize="14pt" />}
            icon={<LinkIcon fontSize="14pt" />}
            onClick={() => open(url)}
        >
            {name}
        </Button>
    ) ;
};

export const ProjectCardFooter: FC<Props> = ({ readMore, sizzle, demo }) => {
    return (
        <Flex justifyContent={readMore ? "space-between" : "flex-end"} alignItems="center" pt="8">
            <ReadMore readMore={readMore} />
            <Flex gap="4" justifyContent="space-between" alignItems="center" display={demo || sizzle ? "flex" : "none"}>
                <SizzleReel sizzle={sizzle} />

                {demo?.map((itm, idx) => (
                    <LiveDemo name={itm.name} url={itm.url} />
                ))}
            </Flex>
        </Flex>
    );
};
