import Tooltip from './tooltip';
import Dropdown from './dropdown';
import Tabs from './tabs';
import Snackbar from './snackbar';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('.snackbar-trigger');

button.addEventListener('click', () => {
  snackbar.show('Hello there!');
});
