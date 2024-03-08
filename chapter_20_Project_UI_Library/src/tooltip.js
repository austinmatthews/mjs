import './ui/styles/tooltip.css';

class Tooltip {
  constructor(element) {
    this.element = element;
    this.message = element.dataset.message;
  }
  init() {
    const tip = document.createElement('div');
    tip.classList.add('tip');
    tip.textContent = this.message;
    this.element.appendChild(tip);
    this.element.addEventListener('mouseenter', (e) => {
      tip.classList.add('active');
    });
    this.element.addEventListener('mouseleave', (e) => {
      tip.classList.remove('active');
    });
  }
}

export { Tooltip as default };
