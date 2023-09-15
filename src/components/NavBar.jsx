const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-600 px-20 py-5 text-white text-center">
      <h1 className="text-2xl">OLADAPO</h1>
      <ul className="flex items-center gap-5">
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
