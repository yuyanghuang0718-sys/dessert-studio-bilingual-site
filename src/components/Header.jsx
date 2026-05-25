import { navigation } from '../config/navigation.js';

function Header({ content, language, onLanguageChange }) {
  const handleNavClick = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

        <a className="brand-lockup" href="#home" onClick={(event) => handleNavClick(event, 'home')}>
          <span className="brand-mark" aria-hidden="true">
            {content.brand.mark}
          </span>
          <span>
            <strong>{content.brand.name}</strong>
            <small>{content.brand.subtitle}</small>
          </span>
        </a>

        <div className="header-icons" aria-label="Header actions">
          <button type="button" aria-label={content.header.icons.account}>
            <span className="icon-person" aria-hidden="true" />
          </button>
          <button type="button" aria-label={content.header.icons.note}>
            <span className="icon-note" aria-hidden="true" />
          </button>
          <button type="button" aria-label={content.header.icons.search}>
            <span className="icon-search" aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav className="main-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={(event) => handleNavClick(event, item.id)}>
            {content.nav[item.labelKey]}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
