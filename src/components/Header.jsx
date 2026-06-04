import { Link, NavLink } from 'react-router-dom';
import InstagramIcon from './InstagramIcon.jsx';
import { navigation } from '../config/navigation.js';
import headerLogo from '../assets/timmy-dessert-header-logo.svg';

function Header({ content, language, onLanguageChange }) {
  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="language-switch" aria-label={content.languageMenuLabel}>
          <button
            type="button"
            className={language === 'zh' ? 'active' : undefined}
            onClick={() => onLanguageChange('zh')}
            aria-pressed={language === 'zh'}
          >
            中文
          </button>
          <span aria-hidden="true">|</span>
          <button
            type="button"
            className={language === 'en' ? 'active' : undefined}
            onClick={() => onLanguageChange('en')}
            aria-pressed={language === 'en'}
          >
            English
          </button>
        </div>

        <Link className="brand-lockup" to="/">
          <img
            className="header-logo"
            src={headerLogo}
            alt={`${content.brand.name} ${content.brand.subtitle}`}
          />
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
