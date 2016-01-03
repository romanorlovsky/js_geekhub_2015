class Painter {
    constructor(container, itemWrapper = 'div', activeClassName = 'active') {
        this.container = document.querySelector(container);

        if (!this.container) {
            throw new Error('Container not found');
        }

        this.itemWrapper = String(itemWrapper).toLowerCase();
        this.activeClassName = activeClassName;
    }

    drawWorld(map) {
        if (map.constructor.name !== 'Array') {
            throw new Error('Incorrect drawing data.')
        }

        let html = '';
        let height = map.length;
        let width = map[0].length;
        let currentClass;

        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                currentClass = map[i][j] ? this.activeClassName : '';

                html += `<${this.itemWrapper} class="${currentClass}"></${this.itemWrapper}>`;
            }

            html += `<${this.itemWrapper} class="clear"></${this.itemWrapper}>`;
        }

        this.container.innerHTML = html;
    }
}

export default Painter;