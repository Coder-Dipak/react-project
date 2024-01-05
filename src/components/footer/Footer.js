import './Footer.css'  //here we used external  css by importing the css file to js file

function Footer() { //this is footer component
   // return <h1 id='myFooter'>this is Footer component</h1> //here external css applied
   
   return <div className="container-Fluid">
   <footer className="py-3 my-0 bg-dark text-white">
     <ul className="nav justify-content-center border-bottom pb-3 mb-3">
       <li className="nav-item"><a href="#" className="nav-link px-2">Home</a></li>
       <li className="nav-item"><a href="#" className="nav-link px-2">Features</a></li>
       <li className="nav-item"><a href="#" className="nav-link px-2">Pricing</a></li>
       <li className="nav-item"><a href="#" className="nav-link px-2">FAQs</a></li>
       <li className="nav-item"><a href="#" className="nav-link px-2">About</a></li>
     </ul>
     <p className="text-center">© 2021 Company, Inc</p>
   </footer>
 </div>
  
  }
  
export default Footer;
//we can also create a component by shortcut  command rfc, the code we get will be same meaning as above
  