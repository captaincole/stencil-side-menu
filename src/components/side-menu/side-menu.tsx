import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'side-menu',
  styleUrl: 'side-menu.css'
})
export class SideMenu {

  @Prop() first: string;
  @Prop() last: string;
  @Event() backgroundToggle: EventEmitter;

  menuToggle(e) {
    console.log('Background toggled menu', e);
    this.backgroundToggle.emit(e);
  }

  render() {
    return (
        <div class="side-menu">
                <div class="menu-background" onClick={(e) => this.menuToggle(e)}>
                </div>
                <div class="actual-menu">
                  <slot />
                </div>
        </div>
    );
  }
}
