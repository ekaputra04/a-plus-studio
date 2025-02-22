import { Button } from "./ui/button";

export default function Hero() {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-8 lg:gap-16 px-8 md:px-0">
        <div className="relative space-y-8 md:px-16 lg:px-32 md:w-1/2">
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
            A Digital Product Agency
          </h2>
          <p>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <Button className="bg-blue-700 hover:bg-blue-800 px-10 py-6 rounded-full text-lg">
            Contact Now
          </Button>
          <img
            src="/images/dot.png"
            alt="Dot"
            className="-bottom-16 left-28 -z-10 absolute w-64 lg:w-80"
          />
        </div>
        <div className="relative md:w-1/2">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <img
            src="/images/ellipse.png"
            alt="Ellipse"
            className="top-0 -left-16 -z-10 absolute w-32 h-32"
          />
          <img
            src="/images/ellipse-2.png"
            alt="Ellipse"
            className="right-32 -bottom-16 -z-10 absolute w-32 h-32"
          />
        </div>
      </div>
    </>
  );
}
