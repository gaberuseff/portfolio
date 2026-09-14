import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 py-4 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
