import { Button } from "./ui/button";

export default function Newsletter() {
  return (
    <>
      <div className="px-8 md:px-16 lg:px-32 py-24">
        <div className="relative flex md:flex-row flex-col justify-between items-center gap-8 bg-blue-100 lg:bg-transparent p-8 md:p-16 rounded-3xl">
          <div className="space-y-4 lg:w-1/2">
            <h2 className="font-semibold text-4xl">Subscribe newsletter</h2>
            <p className="text-slate-600">
              I will update good news and promotion service not spam
            </p>
          </div>
          <div className="z-50 lg:w-1/2">
            <div className="flex gap-4 bg-white shadow-lg p-8 rounded-full w-full">
              <input
                type="text"
                className="focus:outline-none w-full"
                placeholder="Enter your email"
              />
              <Button className="bg-blue-700 hover:bg-blue-800 px-8 py-6 rounded-full">
                Contact Now
              </Button>
            </div>
          </div>
          <img
            src="/images/rectangle-blue.png"
            alt="bg"
            className="hidden md:block top-0 right-0 md:-right-8 lg:-right-4 -z-10 md:z-10 absolute h-full object-cover"
          />
          <img
            src="/images/rectangle-blue2.png"
            alt="bg"
            className="hidden lg:block top-0 left-0 -z-20 absolute h-60 object-cover"
          />
          <img
            src="/images/corner-yellow2.png"
            alt="corner"
            className="-bottom-8 -left-8 -z-30 absolute w-40"
          />
          <img
            src="/images/dot.png"
            alt="corner"
            className="-top-16 right-0 lg:-right-16 -z-30 absolute w-80"
          />
        </div>
      </div>
    </>
  );
}
