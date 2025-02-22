import { NavbarItemType } from "@/types/types";

const NavbarItems: NavbarItemType[] = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "What We Do",
    link: "#what-we-do",
  },
  {
    title: "Service",
    link: "#service",
  },
  {
    title: "Project",
    link: "#project",
  },
  {
    title: "Blog",
    link: "#blog",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center px-32 py-8">
        <img src="/images/logo.png" alt="logo" className="w-28" />
        <ul className="flex gap-6">
          {NavbarItems.map((item, index) => (
            <li key={index} className="inline-block mx-4">
              <a
                href={item.link}
                className="font-semibold text-gray-800 hover:text-blue-500 text-base"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
