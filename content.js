import './public/content-style.css'
import viteLogo from './public/vite.svg'

const parent = document.querySelector('body')
const html = `
<div class="crx">
  <a href="https://vitejs.dev" target="_blank">
    <img src="${chrome.runtime.getURL(viteLogo)}" class="logo" alt="Vite logo" />
  </a>
  <h1>Hello Vite!</h1>
  <h2>Hello CRXJS!</h2>
</div>
`

parent.insertAdjacentHTML('afterbegin', html)
console.log('content.js loaded')
