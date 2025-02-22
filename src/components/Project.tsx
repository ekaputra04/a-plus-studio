export default function Project() {
  return (
    <>
      <div className="flex justify-between items-center gap-8 px-32 py-24">
        <div className="relative w-1/2">
          <img src="/images/project.png" alt="" />
          <img
            src="/images/circle-yellow.png"
            alt="circle"
            className="right-0 bottom-0 -z-10 absolute w-32"
          />
        </div>
        <div className="relative space-y-8 w-1/2">
          <h2 className="font-semibold text-4xl">
            Great Digital Product Agency since 2016
          </h2>
          <p className="text-slate-500 text-sm text-wrap">
            Our Business Plan is a written document describing a company's core
            business activites, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according thir
            reuirements.
          </p>
          <img
            src="/images/corner-blue.png"
            alt="corner"
            className="-top-16 -left-8 -z-10 absolute w-32"
          />
          <img
            src="/images/dot.png"
            alt="corner"
            className="-right-16 -bottom-8 -z-10 absolute w-80"
          />
        </div>
      </div>
    </>
  );
}
