import type { NextPage } from "next";
import Image from "next/image";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <Container ExtraClasses="flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-bold text-4xl mb-4">Care Home</h1>
            <h2 className="text-2xl">
              Board Game Reviews &amp; How to Play Videos
            </h2>
          </div>
        </Container>
      </Section>
      <Section ExtraClasses="!pt-0">
        <Container ExtraClasses="grid lg:grid-cols-3 gap-8">
          <div className="col-span-2 grid 2xl:grid-cols-1 gap-8">
            <div className="flex transition-all bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
              <div className="w-1/3 relative">
                <Image
                  src="/img/Smoke-Mirrors-Box-150x150.jpg"
                  width="150"
                  height="150"
                  layout="fill"
                  alt="title"
                />
              </div>
              <div className="w-2/3 p-8">
                <h3 className="text-gray-900 font-bold text-2xl">
                  Smoke &amp; Mirrors First Impressions
                </h3>
                <p className="mt-3 text-xs">
                  Posted on 1st July 2022 by Rob Gould
                </p>
                <hr className="my-4" />
                <p className="mt-2 text-gray-600 text-sm">
                  Smoke &amp; Mirrors is a bluffing game with just 18 cards.
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                  Can you use deduction and math to win this one?
                </p>
                <div className="flex item-center justify-between mt-3">
                  <button className="px-3 py-2 border border-gray-800 transition-all bg-gray-800 text-white hover:bg-white hover:text-gray-800 text-xs font-bold uppercase rounded">
                    Continue reading
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-4">Top Articles</h2>
            <a>Article link here</a>
            <h2 className="font-bold text-xl my-4">Recent Blog Posts</h2>
            <a>Article link here</a>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Home;
