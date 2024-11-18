import React from 'react';

const Header = () => {
  return (
    <footer className="footer">
        <nav>
          <ul class="link">
            <li><a href="https://x.com/KabutoEbi_mp3" target="_blank" rel="noopener noreferrer">
              <img src="./images/logo-x.png" className="x" alt="x" />
            </a></li>
            <li><a href="https://github.com/KabutoEbi" target="_blank" rel="noopener noreferrer">
              <img src="./images/logo-github.png" className="github" alt="github" />
            </a></li>
            <li><a href="https://qiita.com/KabutoEbi" target="_blank" rel="noopener noreferrer">
              <img src="./images/logo-qiita.png" className="qiita" alt="qiita" />
            </a></li>
            <li><a href="https://atcoder.jp/users/KabutoEbi" target="_blank" rel="noopener noreferrer">
              <img src="./images/logo-atcoder.png" className="atcoder" alt="atcoder" />
            </a></li>
          </ul>
        </nav>
        <img src="./images/top.png" className="top" alt="top" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}
        />
    </footer>
  );
};

export default Header;
