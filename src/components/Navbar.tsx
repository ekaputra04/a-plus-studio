import { NavbarItemType } from "@/types/types";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";

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
      <div className="hidden lg:flex justify-between items-center px-32 py-8">
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
      <Sheet>
        <div className="lg:hidden flex justify-between items-center px-8 md:px-16 py-8">
          <img src="/images/logo.png" alt="logo" className="w-28" />
          <SheetTrigger>
            <AlignRight />
          </SheetTrigger>
        </div>
        <SheetContent side={"left"} className="pt-16">
          <img src="/images/logo.png" alt="logo" className="w-28" />
          <ul className="flex flex-col gap-6 mt-12">
            {NavbarItems.map((item, index) => (
              <li
                key={index}
                className="group inline-block hover:pl-2 hover:border-l-blue-700 hover:border-l-2 transition-all"
              >
                <a
                  href={item.link}
                  className="group-hover:text-blue-500 font-semibold text-gray-800 hover:text-blue-700 text-base"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}
