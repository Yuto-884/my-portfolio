// src/components/Header.tsx

import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

interface Props {
  theme: string;
  onThemeToggle: () => void;
}

export default function Header({ theme, onThemeToggle }: Props) {
  const navItems = [
    { label: "About", hash: "about" },
    { label: "Skils", hash: "skils" },
    { label: "Works", hash: "works" },
    { label: "Certs", hash: "certifications" },
    { label: "Contact", hash: "contact" },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          {/* ロゴ表示部分 */}
          <Link to="/" className="header-logo">
            {profile.nameEn.split(" ")[0]}<span>.</span>
          </Link>
          <nav>
            <ul className="header-nav">
              {navItems.map((item) => 
              (
                <li key={item.label}>
                  {/* #about の形式でその表示要素へ移動出来るようにする */}
                  <Link to={`/#${item.hash}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <button
          className="theme-toggle"
          onClick={onThemeToggle}
          aria-label={theme == 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
          >
            {theme === 'dark' ? 'FaSun' : 'FaMoon'}
          </button>
          
        </div>
      </div>
    </header>
  );
}