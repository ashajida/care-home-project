import type { NextPage } from "next";
import Image from "next/image";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";

const About: NextPage = () => {
  return (
    <>
      <Section>
        <Container>
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-4">About Spiral Orbit</h1>
            <p>This is the about page, all about Spiral Orbit.</p>
          </div>
        </Container>
      </Section>
    
    </>
  );
};

export default About;
