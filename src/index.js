import React from 'react'; import ReactDOM from 'react-dom/client'; 
import './index.css'; import App from './App';
// إنشاء جذر التطبيق
const root = ReactDOM.createRoot(document.getElementById('root'));
// تشغيل التطبيق
root.render( <React.StrictMode> <App /> </React.StrictMode>
);
