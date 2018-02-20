import { render } from '@stencil/core/testing';
import { SideMenu } from './side-menu';

describe('my-component', () => {
  it('should build', () => {
    expect(new SideMenu()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [SideMenu],
        html: '<side-menu></side-menu>'
      });
    });

    it('should work without parameters', () => {
      it('should build', () => {
        expect(new SideMenu()).toBeTruthy();
      });
    });
  });
});