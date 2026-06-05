import { useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import NoticePage from './pages/NoticePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
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
    <BrowserRouter>
      <div className="site-shell" data-language={language}>
        <Header content={content} language={language} onLanguageChange={setLanguage} />
        <main>
          <Routes>
            <Route path="/" element={<AboutPage content={content} />} />
            <Route path="/about" element={<AboutPage content={content} />} />
            <Route path="/products" element={<ProductsPage content={content} language={language} />} />
            <Route path="/notice" element={<NoticePage content={content} />} />
            <Route path="/contact" element={<ContactPage content={content} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
