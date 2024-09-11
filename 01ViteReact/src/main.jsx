import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// How react see's a jsx and handles it, behind the scenes
const Element = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const user = "chai aur react";

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  "Click Me",
  user
);

createRoot(document.getElementById('root')).render(
  // Element
  // reactElement
  <App />
)
