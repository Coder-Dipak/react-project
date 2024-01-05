import React from 'react';

import './F1.css';//clash of css
import './F2.css';

import styleObj1 from './File1.module.css';//moduleCSS file importes as a object
import styleObj2 from  './File2.module.css';

export default function CssModule() {//for understanding of module-css concept
  return <>
  {/* here the clash of css will be happen on class1 and later will prevail */}
  <h3 className='classX'>this is div1</h3>   {/* normal css */}
  <h3 className='classX'>this is div2</h3>
     <hr></hr>
     
  {/* using cssModule(with file.module.css extension) to separate css with same class name */}
  <h2 className={styleObj1.classX}>this is div1</h2>   {/* module css with object */}
  <h2 className={styleObj2.classX}>this is div2</h2>
     <hr></hr>

  {/* combination of normal and module css */}
  <h1 className={`class1 ${styleObj1.classY}`}>this is div1</h1>   {/* normal & module css  */}
  <h1 className={`class1 ${styleObj2.classY}`}>this is div2</h1>
  </>
}
