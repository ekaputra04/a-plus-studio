import { ServiceItemType } from "@/types/types";
import OurServiceCard from "./OurServiceCard";

const services: ServiceItemType[] = [
  {
    images: "/images/box-search.png",
    title: "Business Idea Planning",
    description: "We present you a proposal and discuss niffty-gritty like",
    backroundColor: "bg-blue-100",
  },
  {
    images: "/images/empty-wallet.png",
    title: "Financial Planning System",
    description: "Protocols apart from aengage models, pricing billing",
    backroundColor: "bg-orange-100",
  },
  {
    images: "/images/code.png",
    title: "Development Website and App",
    description: "Communication protocols apart from engagement models",
    backroundColor: "bg-red-100",
  },
  {
    images: "/images/chart-square.png",
    title: "Market Analysis Project",
    description: "Protocols apart from aengage models, pricing billing",
    backroundColor: "bg-green-100",
  },
];

export default function OurService() {
  return (
    <div className="relative">
      <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-16 px-8 md:px-16 lg:px-32">
        <div className="relative space-y-6 lg:w-1/3">
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-wrap">
            How can we help your Business?
          </h2>
          <p className="text-slate-500 text-wrap">
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <img
            src="/images/corner-yellow.png"
            alt="corner"
            className="-top-14 lg:-top-20 -left-5 lg:-left-10 -z-10 absolute w-24 lg:w-48"
          />
        </div>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:px-16 lg:w-2/3">
          <div className="flex flex-col gap-8 lg:mt-16">
            <OurServiceCard item={services[0]} />
            <OurServiceCard item={services[1]} />
          </div>
          <div className="flex flex-col gap-8">
            <OurServiceCard item={services[2]} />
            <OurServiceCard item={services[3]} />
          </div>
        </div>
      </div>
      <img
        src="/images/rectangle.png"
        alt="background"
        className="top-96 lg:top-10 right-0 -z-10 absolute w-2/3"
      />
      <img
        src="/images/dot.png"
        alt="dot"
        className="bottom-16 left-0 lg:left-32 -z-20 absolute w-96"
      />
      <img
        src="/images/ellipse-3.png"
        alt="ellipse"
        className="right-36 bottom-10 -z-20 absolute w-32"
      />
    </div>
  );
}
