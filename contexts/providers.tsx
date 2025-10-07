import { QueryProvider } from "@/contexts/react-query/query-provider.client";
import { ThemeProvider } from "@/contexts/theme-provider/theme-provider.client";
import { PropsWithChildren } from "react";

type ProvidersProps = PropsWithChildren;

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  );
};

export default Providers;
