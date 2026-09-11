import { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

const roles = [
  {
    company: "Keep Technologies",
    title: "Senior Software Engineer",
    dates: "May 2026 – Present",
    summary:
      "Leading architecture, web performance, and frontend standards — including a merchant platform projected at $4M ARR and a 67% faster homepage.",
    highlights: [
      "Architected a merchant partnership platform projected to onboard 300 merchants and about $4M ARR in year one.",
      "Cut homepage first paint by 67% (1.8s → 0.6s), server response by 85%, and raised Lighthouse from 80 to 95.",
      "Built Next.js data-fetching patterns adopted as the team standard and wrote the engineering Data Fetching Guide.",
      "Served as Frontend Guild Lead: set coding, testing, and AI-assisted review standards and mentored engineers.",
      "Authored 33% of the team's all-time end-to-end and integration test coverage in a single semester.",
    ],
  },
  {
    company: "Keep Technologies",
    title: "Software Engineer",
    dates: "April 2024 – May 2026",
    summary:
      "Shipped product that moved real numbers: $314K+ collected, origination doubled, and an internal tool that went from 20s to under 1s.",
    highlights: [
      "Built installment self-payment end-to-end, collecting $314K+ from upcoming and delinquent installments.",
      "Shipped a Capital Origination Fee UI; monthly origination doubled from about $1.6M to $3.3M after launch.",
      "Raised application-process conversion by about 8% with Application process V2.",
      "Optimized an internal admin tool from ~20s to under 1s and cut filter interactions from 5 steps to 1.",
      "Led the Next.js 15 / React 19 upgrade across the monorepo and fixed a production auth regression the same day.",
    ],
  },
  {
    company: "Crowley",
    title: "Semi Senior Software Engineer",
    dates: "May 2022 – April 2024",
    summary:
      "Built a maritime logistics platform that unified distributed data and raised test coverage from 50% to 95%.",
    highlights: [
      "Consolidated multiple distributed data endpoints into one configurable interface with Node.js, Express, React, TypeScript, and DynamoDB.",
      "Designed and implemented the REST APIs consumed by the React frontend.",
      "Increased unit test coverage from 50% to 95% and improved load time on a data-heavy dashboard.",
    ],
  },
  {
    company: "Gemini",
    title: "Software Engineer",
    dates: "April 2021 – May 2022",
    summary:
      "Shipped consumer web experiences at a regulated crypto exchange and improved a Next.js app by 30%.",
    highlights: [
      "Built and optimized user-facing web experiences at Gemini, a leading regulated cryptocurrency exchange.",
      "Achieved a 30% performance improvement on a Next.js and React application through profiling and engineering practice.",
      "Restructured a legacy codebase to follow atomic design patterns and maintainability standards.",
    ],
  },
  {
    company: "Actual.io",
    title: "Software Engineer",
    dates: "Nov 2020 – April 2021",
    summary:
      "Delivered full-stack user management and payment features across React, Django, and PostgreSQL.",
    highlights: [
      "Developed user management and payment features using Django, Stripe, React, and PostgreSQL.",
      "Designed and optimized database schemas and REST API endpoints for payment flows.",
    ],
  },
  {
    company: "Agrosmart",
    title: "Web Developer Intern",
    dates: "Nov 2019 – Sept 2020",
    summary:
      "Built a farm telemetry validation system used across Brazil that improved measurement accuracy by 30%.",
    highlights: [
      "Built a sensor data validation system for farm telemetry across Brazil using PHP, JavaScript, and PostgreSQL.",
      "Achieved a 30% improvement in measurement accuracy while working closely with engineering and client teams.",
    ],
  },
];

const RoleCard = ({
  role,
}: {
  role: (typeof roles)[number];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="brand.mist"
      borderRadius="2xl"
      px={[5, 6]}
      py={[5, 6]}
      boxShadow="0 12px 40px -24px rgba(91, 42, 134, 0.35)"
    >
      <Text
        fontSize="xs"
        fontWeight="600"
        letterSpacing="0.08em"
        textTransform="uppercase"
        color="brand.violet"
        mb={1}
      >
        {role.dates}
      </Text>
      <Heading as="h3" fontSize={["lg", "xl"]} color="brand.ink">
        {role.title}
      </Heading>
      <Text fontWeight="500" color="gray.600" mb={3}>
        {role.company}
      </Text>
      <Text color="gray.700" lineHeight="1.7">
        {role.summary}
      </Text>
      <Button
        variant="link"
        color="brand.violet"
        fontWeight="600"
        mt={3}
        onClick={() => setIsOpen((open) => !open)}
        _hover={{ color: "brand.pink", textDecoration: "none" }}
        aria-expanded={isOpen}
      >
        {isOpen ? "Hide highlights" : "See highlights"}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <UnorderedList mt={3} spacing={2} pl={1} color="gray.700">
          {role.highlights.map((highlight) => (
            <ListItem key={highlight} lineHeight="1.7">
              {highlight}
            </ListItem>
          ))}
        </UnorderedList>
      </Collapse>
    </Box>
  );
};

const Experience = () => (
  <Box as="section" id="experience" bg="brand.wash" scrollMarginTop="72px">
    <Box maxW="1600px" mx="auto" px={[4, 4, 8, 16]} py={[12, 16, 20]}>
      <Flex
        justify="space-between"
        align={{ base: "flex-start", md: "flex-end" }}
        direction={{ base: "column", md: "row" }}
        gap={6}
        mb={[10, 12, 16]}
      >
        <Box>
          <Text
            fontSize="sm"
            fontWeight="600"
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="brand.violet"
            mb={2}
          >
            Resume
          </Text>
          <Heading fontSize={["3xl", "4xl", "5xl"]} color="brand.ink">
            Work timeline
          </Heading>
        </Box>
        <Button
          as={Link}
          href={`${process.env.PUBLIC_URL}/Laura_Uribe_SE.pdf`}
          download
          bgGradient="linear(to-r, brand.pink, brand.violet)"
          color="white"
          _hover={{
            textDecoration: "none",
            opacity: 0.92,
            transform: "translateY(-1px)",
          }}
          _active={{ transform: "translateY(0)" }}
          borderRadius="full"
          px={6}
        >
          Download resume
        </Button>
      </Flex>

      <Box position="relative">
        <Box
          aria-hidden
          display={{ base: "none", md: "block" }}
          position="absolute"
          left="15px"
          top="8px"
          bottom="8px"
          w="2px"
          bgGradient="linear(to-b, brand.pink, brand.violet, brand.deep)"
          borderRadius="full"
        />

        <VStack align="stretch" spacing={6}>
          {roles.map((role) => (
            <Box
              key={`${role.company}-${role.title}`}
              position="relative"
              pl={{ base: 0, md: "56px" }}
            >
              <Box
                aria-hidden
                display={{ base: "none", md: "block" }}
                position="absolute"
                left="8px"
                top="28px"
                boxSize="16px"
                borderRadius="full"
                bg="white"
                border="3px solid"
                borderColor="brand.violet"
                boxShadow="0 0 0 4px rgba(171, 82, 197, 0.16)"
                zIndex={1}
              />
              <RoleCard role={role} />
            </Box>
          ))}
        </VStack>
      </Box>

      <Text mt={10} color="gray.600" fontSize="sm">
        B.S. in Systems Engineering and Computer Science — Universidad del
        Norte, Barranquilla, 2021.
      </Text>
    </Box>
  </Box>
);

export default Experience;
