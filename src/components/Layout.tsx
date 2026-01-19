import NavigationBar from "./NavigationBar";

type LayoutType = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <NavigationBar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Layout;
