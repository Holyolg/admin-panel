import { BellDot, Cog, Search } from "lucide-react";
import { FC } from "react";
import { Avatar } from "./ui/Avatar";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__mobile-btn">
          <hr className="mobile-btn" />
        </div>
        <h1 className="header__title">Setting</h1>
        <div className="header__right">
          <nav className="header__nav">
            <div className="search">
              <Search className="search__icon" size={20} />
              <input className="search__input" placeholder="Search for something" />
            </div>
            <button className="header__button">
              <Cog />
            </button>
            <button className="header__button">
              <BellDot color="var(--red-color)" />
            </button>
          </nav>

          <Avatar />
        </div>
      </div>
      <div className="search--mobile">
        <Search className="search__icon" size={20} />
        <input className="search__input" placeholder="Search for something" />
      </div>
    </header>
  );
};
