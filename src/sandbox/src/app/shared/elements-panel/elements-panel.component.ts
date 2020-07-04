import { Component, Input } from '@angular/core';
import {
  pebCreateElement,
  PebElement,
  PebElementType,
  PebPageStore,
  PebElementStyling,
  PebScreen
} from '@pe/builder-core';
import { DefaultFontSize } from '@pe/builder-text-editor-compat';
import { EditorState } from '../../../../../../projects/modules/editor/src/services/editor.state';
import { ShapesElementTypes, ButtonElementTypes } from '../../../../../../projects/modules/elements/src';
import { DefaultShapeStyles, DefaultNotificationColor } from '../../../../../../projects/modules/editor/src/common/editor.constants';

let idCounter = 0;
const devUuid = () => String(++idCounter).padStart(2, '0');

const randomColor = () => '#' + (Array(3) as any)
  .fill(null)
  .map(() => Math.floor(Math.random() * 256).toString(16).padStart(2, '0'))
  .join('');

@Component({
  selector: 'peb-sandbox-elements-panel',
  templateUrl: './elements-panel.component.html',
  styleUrls: ['./elements-panel.component.scss']
})
export class ElementsPanelComponent {
  @Input() pageStore: PebPageStore;
  @Input() editor: EditorState;

  ShapesElementTypes = ShapesElementTypes;

  addText() {
    const element = pebCreateElement(PebElementType.Text, {
      id: `text-${Math.random().toString(36).slice(-5)}`,
      text: 'Text',
      style: {
        color: 'black',
        fontSize: {
          desktop: DefaultFontSize
        },
        textAlign: {
          desktop: 'center'
        },
        distanceToLeftGridLine: 300
      } as PebElementStyling,
    });

    this.appendElementToDocument(element);
  }

  addImage() {
    const src = prompt('Enter url:');

    if (!src) {
      return;
    }

    const imageDef = pebCreateElement(PebElementType.Image,
      {
        id: `image-${devUuid()}`,
        style: {
          width: 300,
          height: 150
        },
        meta: {
          loading: true
        }
      });

    this.appendElementToDocument(imageDef);

    setTimeout(() => {
      imageDef.data = { src };
      imageDef.meta.loading = false;

      this.pageStore.updateElement(imageDef.id, imageDef);
    }, 2000);
  }

  addProductPage() {
    const productPageDef = pebCreateElement(PebElementType.ProductPage, {
      id: devUuid(),
    });

    this.appendElementToDocument(productPageDef);
  }

  addBlock() {
    const parentDs = this.editor.findElementToAppend().dimensions;

    const width = Math.min(300, (parentDs.width || Infinity) * 0.8);
    const height = Math.min(300, (parentDs.height || Infinity) * 0.8);

    const element = pebCreateElement(PebElementType.Block, {
      id: `block-${devUuid()}`,
      style: {
        width, height,
        top: 0,
        left: 0,
        background: randomColor(),
      },
    });

    this.appendElementToDocument(element);
  }

  addShape(styles: PebElementStyling = {}, type: ShapesElementTypes) {
    const shapeDef = pebCreateElement(PebElementType.Shape, {
      id: `shape-${devUuid()}`,
      style: {
        ...DefaultShapeStyles,
        ...styles
      },
      data: { type },
      children: [],
    });

    this.appendElementToDocument(shapeDef);
  }

  addButton() {
    const buttonDef = pebCreateElement(PebElementType.Button, {
      id: `button-${devUuid()}`,
      text: 'Button',
      data: {
        type: ButtonElementTypes.Button,
      },
      style: {
        background: 'rgb(0, 132, 255)',
        color: '#ffffff',
        borderRadius: 4,
        fontWeight: 'bold'
      }
    });

    this.appendElementToDocument(buttonDef);
  }

  addAmount() {
    const amountDef = pebCreateElement(PebElementType.Amount, {
      id: `amount-${devUuid()}`,
      text: 'Amount',
      style: {
        background: 'rgb(0, 132, 255)',
        color: '#ffffff',
        borderRadius: 4,
        fontWeight: 'bold'
      }
    });

    this.appendElementToDocument(amountDef);
  }

  addDropdown() {
    const buttonDef = pebCreateElement(PebElementType.Button, {
      id: `button-${devUuid()}`,
      text: 'Dropdown',
      data: {
        type: ButtonElementTypes.DropDown,
      },
      style: {
        background: 'rgb(0, 132, 255)',
        color: '#ffffff',
        borderRadius: 4,
        fontWeight: 'bold'
      }
    });

    this.appendElementToDocument(buttonDef);
  }

  addCart() {
    const cartDef = pebCreateElement(PebElementType.Cart, {
      id: `cart-${devUuid()}`,
      data: {
        notificationBackground: DefaultNotificationColor,
        quantity: 1
      },
      style: {
        width: 30,
        height: 30
      }
    });

    this.appendElementToDocument(cartDef);
  }

  addSection() {
    const sectionDef = pebCreateElement(PebElementType.Section, {
      id: `section-${devUuid()}`,
      style: {
        height: 300
      },
      children: [],
    });

    this.pageStore.appendElement(this.pageStore.state.id, sectionDef, {
      type: 'after',
      referenceId: this.editor.activeElement,
    });
    this.editor.selectedElements = [sectionDef.id];
  }

  addProduct() {
    const element = pebCreateElement(PebElementType.Product, {
      id: `product-${devUuid()}`,
      data: {
        products: [
          '2fc539f1-68e2-4ce7-bf44-0519a430131d',
          'b35ead65-c127-46e1-a7cd-10085ab6843a',
          // {
          //   imgSrc: 'https://payevertesting.blob.core.windows.net/products/2d990a3f-6e44-4d85-8731-195a94576d7b-AquabeachwritinghT-JdFEQ',
          //   productPrice: '1324.00 €',
          //   salePrice: '1313.00 €',
          //   title: 'aqua',
          //   onSales: true,
          //   id: '2fc539f1-68e2-4ce7-bf44-0519a430131d'
          // },
          // {
          //   imgSrc: 'https://payevertesting.blob.core.windows.net/products/undefined',
          //   productPrice: '777.00 €',
          //   salePrice: '344243.00 €',
          //   title: 'khkjlhkjh',
          //   onSales: true,
          //   id: 'b35ead65-c127-46e1-a7cd-10085ab6843a'
          // }
        ],
        columns: {
          any: 1
        },
        itemSize: {
          width: 300,
          height: 500,
        }
      },
      style: {
        color: 'white',
        width: 300,
        height: 1000,
        left: {
          desktop: 246.5,
          tablet: 440.5,
          mobile: 22.5
        },
        top: {
          desktop: -75,
          tablet: 52,
          mobile: -75
        },
        distanceToLeftGridLine: {
          tablet: 440.5,
          desktop: 0,
          mobile: 0
        },
        display: {
          desktop: 'none',
          tablet: 'block',
          mobile: 'none'
        }
      },
      children: []
    });

    this.appendElementToDocument(element);
  }

  private appendElementToDocument(element: PebElement) {
    element.style.display = {
      [PebScreen.Desktop]: 'none',
      [PebScreen.Tablet]: 'none',
      [PebScreen.Mobile]: 'none',
      [this.editor.screen]: 'block',
    };

    const parent = this.editor.findElementToAppend();

    this.pageStore.appendElement(parent.id, element);
    this.editor.selectedElements = [element.id];
  }
}
