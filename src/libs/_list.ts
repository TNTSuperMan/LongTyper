import jquery1124 from "./jquery-1.12.4";
import jquery224 from "./jquery-2.2.4";
import jquery371 from "./jquery-3.7.1";
import reactDom1831 from "./react-dom-18.3.1";
import vue1028 from "./vue-1.0.28";
import vue2716 from "./vue-2.7.16";
import vue3512 from "./vue-3.5.12";

export enum Libs{
  vue1, vue2, vue3,
  jquery1, jquery2, jquery3,
  react_dom, sample
}
export const toLibText = (l: Libs):string => {
  let t:number = parseInt(Object.prototype.toLocaleString.call(l??""));
  if(Number.isNaN(t))
    t = parseInt(Libs[l]);
  switch(t){
    case Libs.vue1:return vue1028
    case Libs.vue2:return vue2716
    case Libs.vue3:return vue3512
    case Libs.jquery1:return jquery1124
    case Libs.jquery2:return jquery224
    case Libs.jquery3:return jquery371
    case Libs.react_dom:return reactDom1831
    case Libs.sample:return "sex"
    default:return ""
  }
}
