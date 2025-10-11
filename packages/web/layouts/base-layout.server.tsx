import Footer from "@/components/footer/footer.server";
import Navbar from "@/components/navbar/navbar.server";
import React, { PropsWithChildren } from "react";

type BaseLayoutProps = PropsWithChildren;

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <main className="w-dvw h-dvh flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="mx-auto max-w-4xl px-8 lg:px-0">{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default BaseLayout;
