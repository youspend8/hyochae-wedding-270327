import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="invitation">
      <p className="eyebrow">OUR WEDDING INVITATION</p>
      <div className="flower" aria-hidden="true">✳</div>
      <h1>HYO <span>&</span> CHAE</h1>
      <div className="rule" aria-hidden="true" />
      <h2>우리의 시작에<br />초대합니다</h2>
      <p className="message">소중한 날, 소중한 분들을 위해<br />청첩장을 정성껏 준비하고 있습니다.</p>
      <p className="note">자세한 소식으로 곧 찾아뵙겠습니다.</p>
      <footer>WITH LOVE, HYO & CHAE</footer>
    </main>
  );
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
