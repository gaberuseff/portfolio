import {getCurrentUserProfile} from "@/services/apiAuth";
import {Suspense} from "react";
import Logo from "./Logo";
import Nav from "./Nav";

async function NavWithUser() {
  const account = await getCurrentUserProfile();
  return <Nav profile={account?.profile || null} />;
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 py-4 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo />
        <Suspense fallback={<Nav profile={null} />}>
          <NavWithUser />
        </Suspense>
      </div>
    </header>
  );
}

export default Header;
