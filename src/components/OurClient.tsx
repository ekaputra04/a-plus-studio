const ourClients = [
  {
    id: 1,
    name: "Google",
    image: "/images/google.png",
  },
  {
    id: 2,
    name: "AirBnb",
    image: "/images/airbnb.png",
  },
  {
    id: 3,
    name: "Uber Eats",
    image: "/images/uber-eats.png",
  },
  {
    id: 4,
    name: "Amazon",
    image: "/images/amazon.png",
  },
];

export default function OurClient() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-normal items-center gap-16 px-8 md:px-16 lg:px-32 py-24">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
            Our Client
          </h2>
          <p className="text-slate-500 text-wrap">
            Several selected clients, who already believe in our service.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-around gap-8">
          {ourClients.map((client) => (
            <img
              key={client.id}
              src={client.image}
              alt={client.name}
              className="w-24 lg:w-36"
            />
          ))}
        </div>
      </div>
    </>
  );
}
