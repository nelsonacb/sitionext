import Link from "next/link";
import { socialLinks } from "@/data/infoFooter";

const SocialLink = ({ href, svg}) => <Link href={href}>{svg}</Link>;

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
        <div className="text-center text-sm text-slate-600">
          © 2024 All Rights Reserved
        </div>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} href={link.href} svg={link.svg}/>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
