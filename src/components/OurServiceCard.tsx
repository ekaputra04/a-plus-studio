import { ServiceItemType } from "@/types/types";

interface OurServiceCardProps {
  item: ServiceItemType;
}

export default function OurServiceCard({ item }: OurServiceCardProps) {
  return (
    <div
      className={`space-y-4 bg-white shadow-lg p-8 border rounded-3xl w-fit h-fit `}
    >
      <div
        className={`${item.backroundColor} mx-auto p-4 rounded-xl w-fit h-fit`}
      >
        <img src={item.images} alt="Logo" className="w-10 lg:w-16" />
      </div>
      <h3 className="font-semibold text-lg lg:text-xl text-center text-wrap">
        {item.title}
      </h3>
      <p className="text-slate-600 text-sm text-center text-wrap">
        {item.description}
      </p>
    </div>
  );
}
