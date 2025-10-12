import Github from "@/icons/github";
import Linkedin from "@/icons/linkedin";
import { CloudDownload } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex gap-4 md:flex-nowrap justify-between items-center px-10 py-8">
      <p>
        This is was made for optional assignment of Cloudfare job application
        for intern role.
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center cursor-pointer">
          <Link
            href={"https://tinyurl.com/sanjaykumaravelanse"}
            target="_blank"
          >
            <CloudDownload className="w-10 h-10 bg-accent rounded-full p-2" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/sanjaykumarkumaravelan/"}
            target="_blank"
          >
            <Linkedin className="w-10 h-10 bg-accent fill-foreground rounded-full p-2" />
          </Link>
          <Link href={"https://github.com/hashedalgorithm"} target="_blank">
            <Github className="w-10 h-10 bg-accent rounded-full p-2" />
          </Link>
        </div>

        <p>
          Created by{" "}
          <span className="underline">
            <Link href={"https://github.com/hashedalgorithm"}>
              Sanjay Kumar Kumaravelan
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
