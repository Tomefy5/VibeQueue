import Header from "@/components/myComponents/Header/Header";

export default function BasicLayout({ children }) {
  return (
    <div className="mx-auto w-full lg:w-[80%] xl:w-[60%]">
      <Header />
      {children}
    </div>
  );
}
