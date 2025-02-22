import { FooterItemType, SocialMediaType } from "@/types/types";

const socialMedias: SocialMediaType[] = [
  {
    name: "facebook",
    image: "/images/facebook.png",
    href: "https://www.facebook.com/",
  },
  {
    name: "twitter",
    image: "/images/twitter.png",
    href: "https://twitter.com/",
  },
  {
    name: "linkedin",
    image: "/images/linkedin.png",
    href: "https://www.linkedin.com/",
  },
];

const footerItems: FooterItemType[] = [
  {
    title: "What We Do",
    detail: [
      {
        name: "Web Design",
        href: "#",
      },
      {
        name: "App Design",
        href: "#",
      },
      {
        name: "Sosial Media Manage",
        href: "#",
      },
      {
        name: "Market Analysis Project",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    detail: [
      {
        name: "About Us",
        href: "#",
      },
      {
        name: "Career",
        href: "#",
      },
      {
        name: "Become Investor",
        href: "#",
      },
    ],
  },
  {
    title: "Support",
    detail: [
      {
        name: "FAQ",
        href: "#",
      },
      {
        name: "Policy",
        href: "#",
      },
      {
        name: "Business",
        href: "#",
      },
    ],
  },
  {
    title: "Contact",
    detail: [
      {
        name: "WhatsApp",
        href: "#",
      },
      {
        name: "Support 24",
        href: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <div className="gap-32 grid grid-cols-6 px-32 py-24 border-t">
        <div className="space-y-8 col-span-2">
          <img src="/images/logo.png" alt="logo" className="w-28" />
          <p className="text-gray-500">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <div className="flex gap-4">
            {socialMedias.map((socialMedia) => (
              <a href={socialMedia.href} key={socialMedia.name}>
                <img
                  src={socialMedia.image}
                  alt={socialMedia.name}
                  className="w-10"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="gap-8 grid grid-cols-4 col-span-4">
          {footerItems.map((footerItem) => (
            <div key={footerItem.title} className="space-y-4 col-span-1">
              <h1 className="font-bold text-xl">{footerItem.title}</h1>
              <ul className="space-y-2">
                {footerItem.detail.map((detail) => (
                  <li key={detail.name} className="hover:underline">
                    <a href={detail.href} className="text-gray-500">
                      {detail.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 border-t">
        <p className="text-slate-500 text-sm text-center">
          Copyright © 2025 Design by Avi Yansah | Slicing by ekaputra04
        </p>
      </div>
    </>
  );
}
