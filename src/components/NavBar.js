import NumResults from './NumResults';
import Search from './Search';
import Logo from './Logo';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}
