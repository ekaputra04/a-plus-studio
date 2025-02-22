export type NavbarItemType = {
  title: string;
  link: string;
};

export type ServiceItemType = {
  images: string;
  title: string;
  description: string;
  backroundColor: string;
};

export type SocialMediaType = {
  name: string;
  image: string;
  href: string;
};

export type FooterItemType = {
  title: string;
  detail: FooterItemDetailType[];
};

export type FooterItemDetailType = {
  name: string;
  href: string;
};
