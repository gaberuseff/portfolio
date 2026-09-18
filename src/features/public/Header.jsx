import Logo from "./Logo";
import Nav from "./Nav";
import {getCurrentUser} from "@/services/apiAuth";
import {Suspense} from "react";

async function NavWithUser() {
  const user = await getCurrentUser();
  return <Nav user={user} />;
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 py-4 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo />
        <Suspense fallback={<Nav user={null} />}>
          <NavWithUser />
        </Suspense>
      </div>
    </header>
  );
}

export default Header;
