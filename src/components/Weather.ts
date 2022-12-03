const template = document.createElement('template')

template.innerHTML = `
 <h1><slot name="temp" /></h1>
`

class Weather extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot?.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('weather-element', Weather)
