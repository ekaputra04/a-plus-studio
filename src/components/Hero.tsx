import { Button } from "./ui/button";

export default function Hero() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="relative space-y-8 px-32 w-1/2">
          <h2 className="font-semibold text-4xl">A Digital Product Agency</h2>
          <p>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <Button className="bg-blue-700 px-10 py-6 rounded-full text-lg">
            Contact Now
          </Button>
          <img
            src="/images/dot.png"
            alt="Dot"
            className="-bottom-16 left-28 -z-10 absolute w-80 h-40"
          />
        </div>
        <div className="relative w-1/2">
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
        </div>
      </div>
    </>
  );
}
