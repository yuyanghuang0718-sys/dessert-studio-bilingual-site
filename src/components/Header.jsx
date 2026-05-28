import { Link, NavLink } from 'react-router-dom';
import InstagramIcon from './InstagramIcon.jsx';
import { navigation } from '../config/navigation.js';

function Header({ content, language, onLanguageChange }) {
  return (
    <header className="site-header">
      <div className="utility-bar">
        <label className="language-select">
          <span>{content.languageMenuLabel}</span>
          <select
            value={language}
            onChange={(event) => onLanguageChange(event.target.value)}
            aria-label={content.languageMenuLabel}
          >
            <option value="en">English</option>
            <option value="zh">繁體中文</option>
          </select>
        </label>

        <Link className="brand-lockup" to="/">
          <span className="brand-mark" aria-hidden="true">
            {content.brand.mark}
          </span>
          <span>
            <strong>{content.brand.name}</strong>
            <small>{content.brand.subtitle}</small>
          </span>
        </Link>

        <div className="header-icons" aria-label="Header actions">
          <a
            className="instagram-link"
            href={content.instagram.url}
            target="_blank"
            rel="noreferrer"
            aria-label={content.header.icons.instagram}
            title={content.instagram.handle}
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      <nav className="main-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {content.nav[item.labelKey]}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
