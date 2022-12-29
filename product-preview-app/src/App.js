import './App.css';
import desktop from './images/image-product-desktop.jpg'
import mobile from './images/image-product-mobile.jpg'
import cart from './images/icon-cart.svg'

function App() {
  return (
    <div className='box'>
      <div className='container'>
        <img className='larg' src={desktop} alt="" />
        {/* <img className='mobile' src={mobile} alt="" /> */}
        <div className="content">
          <div className='more'>
            <h2 className="main-title">PERFUME</h2>
            <h3 className="title">Gabrielle Essence Eau De Parfum</h3>
            <p className="text">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <div className="price">
              <span className="discount">$149.99</span>
              <span className="old-price">$169.99</span>
            </div>
            <button className='btn'> <img src={cart} alt="" /> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
