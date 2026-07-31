import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className="p-6">
      <div className="flex items-center">
        <img src={logo} alt="Sneakers logo" className="mr-4" />
      </div>
    </header>
  );
}

export default Header;
