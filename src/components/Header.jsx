import { NavLink } from 'react-router-dom';
import { navigation } from '../config/navigation.js';

function Header({ content, language, onLanguageChange }) {
  return (
    <header className="site-header">
      <nav className="main-nav" aria-label="Primary navigation">
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
