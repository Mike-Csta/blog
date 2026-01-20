import NavigationBar from "./NavigationBar";

type LayoutType = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        <NavigationBar />
      </div>
      <main className="flex-1 w-full overflow-y-auto">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
