import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ProductSection from './components/ProductSection.jsx';
import OrderNotice from './components/OrderNotice.jsx';
import Contact from './components/Contact.jsx';
import { zh } from './content/zh.js';
import { en } from './content/en.js';

const contentMap = {
  zh,
  en,
};

function App() {
  const [language, setLanguage] = useState('zh');
  const content = useMemo(() => contentMap[language], [language]);

  return (
    <div className="site-shell">
      <Header content={content} language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero content={content} />
        <About content={content} />
        <ProductSection content={content} language={language} />
        <OrderNotice content={content} />
        <Contact content={content} />
      </main>
    </div>
  );
}

export default App;
