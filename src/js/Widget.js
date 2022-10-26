export default class Widget {
    renderWidget(text) {
      this.widget = document.createElement('div');
      this.widget.classList.add('widget');
      this.button = document.createElement('button');
      this.button.classList.add('btn');
      this.button.innerText = 'Collapse';
      this.widget.appendChild(this.button);
      this.textBlock = document.createElement('div');
      this.textBlock.classList.add('text-block');
      this.textBlock.classList.add('hidden');
      this.textBlock.innerText = text;
      this.widget.appendChild(this.textBlock);
      document.querySelector('body').appendChild(this.widget);
      this.button.addEventListener('click', () => {
        if (this.textBlock.classList.contains('hidden')) {
          this.textBlock.classList.remove('hidden');
        } else {
          this.textBlock.classList.add('hidden');
        }
      });
    }
  }