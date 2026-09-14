import Footer from "@/features/public/Footer";
import Header from "@/features/public/Header";

function layout({children}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="mx-auto w-full flex-1">{children}</main>

      <Footer />
    </div>
  );
}

export default layout;
