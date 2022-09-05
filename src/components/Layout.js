import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen ">
      <Header />
      <main className="w-full max-h-[90%] flex flex-row ">
        <Sidebar />
        <div className="w-5/6 bg-[#181820] h-ful overflow-hidden flex justify-center items-start text-white p-3">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
