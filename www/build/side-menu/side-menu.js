/*! Built with http://stenciljs.com */
const { h, Context } = window.SideMenu;

class SideMenu {
    menuToggle(e) {
        console.log('Background toggled menu', e);
        this.backgroundToggle.emit(e);
    }
    render() {
        return (h("div", { class: "side-menu" },
            h("div", { class: "menu-background", onClick: (e) => this.menuToggle(e) }),
            h("div", { class: "actual-menu" },
                h("slot", null))));
    }
    static get is() { return "side-menu"; }
    static get properties() { return { "first": { "type": String, "attr": "first" }, "last": { "type": String, "attr": "last" } }; }
    static get events() { return [{ "name": "backgroundToggle", "method": "backgroundToggle", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return ".side-menu {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    width: 100%;\n    z-index: 20;\n    background-color: transparent !important;\n    padding: 10px;\n}\n\n.actual-menu {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 250px;\n    min-height: 100%;\n    background-color: white;\n    z-index: 30;\n}\n\n.menu-button {\n    width: 100%;\n    margin: 0px;\n    padding: 10px;\n}\n\n.menu-background {\n    position: absolute;\n    background-color: rgba(38,38,38, 0.2);\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    min-height: 100%;\n    z-index: 5;\n}"; }
}

export { SideMenu };
