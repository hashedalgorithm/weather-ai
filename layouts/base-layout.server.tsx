import Footer from "@/components/footer/footer.server";
import Navbar from "@/components/navbar/navbar.server";
import React, { PropsWithChildren } from "react";

type BaseLayoutProps = PropsWithChildren;

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="w-dvw h-dvh flex flex-col justify-between">
      <div className="">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
