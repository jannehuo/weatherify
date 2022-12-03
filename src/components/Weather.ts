const template = document.createElement('template')

interface ComponentStyle {
  [key: string]: string | object
  statusItem: {
    [key: string]: string | number
  }
}

const componentStyle: ComponentStyle = {
  statusItem: {
    size: 36,
    freezing: '#2f4858',
    cold: '#33658a',
    around_zero: '#86bbd8',
    spring: '#f6ae2d',
    summer: '#f26419',
    heat: '#7d3107',
    default: '#f2f2f2',
  },
}

template.innerHTML = `
<style>
  .temp {
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .status-item {
    width: ${componentStyle.statusItem.size}px;
    height: ${componentStyle.statusItem.size}px;
    border-radius: 50%;
    margin-right: 10px;
  }
</style>
 <div class="temp">
  <p>
    <div class="status-item"></div>
    <slot name="temp" />
  </p>
 </div>
`

class Weather extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot?.appendChild(template.content.cloneNode(true))
    this.applyStatusColor()
  }

  applyStatusColor() {
    const type = this.getAttribute('type') || 'default'
    const statusColor = componentStyle.statusItem[type] as string
    const statusItem = this.shadowRoot?.querySelector(
      '.status-item'
    ) as HTMLElement
    if (statusItem) {
      statusItem.style.background = statusColor
    }
  }
}

customElements.define('weather-element', Weather)
