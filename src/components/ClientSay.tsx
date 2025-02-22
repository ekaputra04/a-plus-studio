export default function ClientSay() {
  return (
    <>
      <div className="px-8 md:px-16 lg:px-32 lg:py-24">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center">
          What our happy slient say
        </h2>
        <p className="mt-4 lg:mt-8 text-slate-600 text-center">
          Several selected clients, who already believe in our service.
        </p>
        <div className="flex md:flex-row flex-col justify-between items-center gap-8 lg:gap-16 mt-16">
          <div className="relative md:w-1/3">
            <img src="/images/client.png" alt="" className="w-full" />
            <img
              src="/images/dot.png"
              alt=""
              className="-top-8 right-0 lg:-right-16 -z-10 absolute w-64"
            />
            <img
              src="/images/ellipse-3.png"
              className="bottom-6 left-8 -z-10 absolute w-24"
              alt=""
            />
          </div>
          <div className="space-y-4 md:w-1/3">
            <h3 className="font-semibold text-xl">Matthew Paul</h3>
            <p className="text-slate-500 text-sm">
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </p>
          </div>
          <div className="md:w-1/3">
            <img src="/images/client-group.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
