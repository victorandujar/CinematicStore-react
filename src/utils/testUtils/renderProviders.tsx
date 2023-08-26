import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router";
import { getComponentRouter, router } from "../../router/router";
import GlobalStyles from "../../styles/GlobalStyles";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export const renderWithProviders = (ui: React.ReactElement) => {
  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        {children}
      </QueryClientProvider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export const renderRouterWithProviders = (ui?: React.ReactElement) => {
  const routerWithProvider = ui ? getComponentRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={routerWithProvider}></RouterProvider>,
  );
};
