class ElementRotator extends HTMLElement {
    constructor() {
        super();
        this.styles = null;
        this.template = null;
        this.init();
    }

    init() {
        this.attachShadow({mode: 'open'});
        this.constructContent();
    }

    constructContent() {
        this.template = document.createElement('template');
        this.styles =
            `<style>
                :host {
                    display: flex;
                    margin: 0 auto;
                    justify-content: center;
                    align-items: center;
                    border: 2px solid hotpink;
                    padding: 100px;
                    width: 200px;
                    font-family: sans-serif;
                    font-weight: 700;
                    margin-top: 20vh;
                }
            </style>`;

        this.template.innerHTML = `${this.styles} <slot/>`;
    }

    connectedCallback() {
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));

        this.animate([
            {transform: 'rotate(0deg) scale(0)'},
            {transform: 'rotate(1070deg) scale(1)'}
        ], {
            duration: 1000,
            easing: 'cubic-bezier(.88, .02, .06, 1)',
            fill: 'forwards'
        })
    }
}

customElements.define('element-rotator', ElementRotator);
