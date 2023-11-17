import logo from "/logo.png";

function Header() {
  return (
    <div className="min-w-full bg-white flex justify-center py-3">
      <img
        className="max-w-sm object-contain"
        src={logo}
        alt="Logo"
      />
    </div>
  );
}

export default Header;
