import NavigationBar from "./NavigationBar";

type LayoutType = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <div className="absolute top-0 z-50 w-full ">
        <NavigationBar />
      </div>
      <main className="flex-1 w-full overflow-y-auto ">
        <div className="mx-auto pt-20">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
