'use strict';


//aiming for fast development

/*----------------------------

  SETUP

----------------------------*/

export let html = document.querySelector("html");
export let body = document.querySelector("body");
// html.setAttribute("style", "box-sizing: border-box: margin: 0; padding: 0;")
// body.setAttribute("style", "box-sizing: border-box: margin: 0; padding: 0;")

/*----------------------------

  CREATING DOM ELEMENTS

----------------------------*/


// export function h1(text,...attributes) {
//   let h1 = document.createElement('h1');
//   let styles = "";
//   // if(attributes[0] == undefined) {
//   //   console.log(true);

//   // } else {
//   //   console.log(false);
//   // }

//   if(attributes[0] !== undefined) {
//     for(let i = 0 ; i < attributes[0].length; i++) {
//       styles += attributes[0][i];
//     }
//   }
//   h1.setAttribute("style",styles);
  
//   h1.textContent = text;
//   body.append(h1);
// }


export class elements{
  constructor(elType,text = "",attributes,src="") {
    this.elType = elType;
    this.text = text;
    this.attributes = attributes;
    this.src = src;

    this.createEl();
  }

  createEl() {
    // console.log(this.elType);
    this.el = document.createElement(this.elType);
    // console.log(this.attributes);
    this.el.src = this.src;

    let styles = "";

    if(this.attributes !== undefined) {
      for(let i = 0 ; i < this.attributes.length; i++) {
        styles += this.attributes[i];
      }
    }
    this.el.setAttribute("style",styles);

    this.el.textContent = this.text;
    body.append(this.el);

  }


}