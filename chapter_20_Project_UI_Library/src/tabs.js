import './ui/styles/tabs.css';

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll('.trigger');
  }
  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }
  toggleTabs(event) {
    //remove active classes
    this.tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    event.target.classList.add('active');
  }
  toggleContent(event) {
    //remove active classes
    const contents = this.container.querySelectorAll('.content');
    contents.forEach((content) => {
      content.classList.remove('active');
    });
    const selector = event.target.getAttribute('data-target');
    const content = this.container.querySelector(selector);
    content.classList.add('active');
  }
}

export { Tabs as default };
