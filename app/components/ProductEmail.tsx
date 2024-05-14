import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ProductEmailProps {
  link: string;
}

export const ProductEmail = ({ link }: ProductEmailProps) => (
  <Html>
    <Head />
    <Preview>Thank Your for buying with MarshalUI</Preview>
    <Tailwind>
      <Body className="bg-white font-sans">
        <Container style={container}>
          <Text className="text-2xl font-semibold">Hi Friend,</Text>
          <Text className="text-lg">
            Thank you for buying your product at MarshalUI.
          </Text>
          <Section className="w-full flex justify-center">
            <Button
              className="text-white bg-blue-500 rounded-lg px-10 py-3"
              href={link}
            >
              Your Product
            </Button>
          </Section>
          <Text className="text-lg">
            Best,
            <br />
            MarshalUI Team
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ProductEmail;

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};
