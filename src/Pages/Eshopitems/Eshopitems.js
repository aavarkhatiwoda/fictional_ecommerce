import './Eshopitems.scss';
import Placeholder_img from '../../Components/Images/placeholder_img.jpg';
import Blacksunglasses from '../../Components/Images/blacksunglasses.png';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';

var addtocart = "ADD TO CART";
export const esi = [
  {
    itemnumber:1,
    quantity:0,
    image:Placeholder_img,
    name:"HAWAI'IAN SHIRT",
    price:30.00,
    addtocartbutton:addtocart,
  },
  {
    itemnumber:2,
    quantity:0,
    image:Placeholder_img,
    name:"SUMMER SHORTS",
    price:25.00,
    addtocartbutton:addtocart,
  },
  {
    itemnumber:3,
    quantity:0,
    image:Placeholder_img,
    name:"SWIMMING TRUNKS",
    price:25.00,
    addtocartbutton:addtocart,
  },
  {
    itemnumber:4,
    quantity:0,
    image:Blacksunglasses,
    name:"POLARIZED BLACK SUNGLASSES",
    price:50.00,
    addtocartbutton:addtocart,
  },
  {
    itemnumber:5,
    quantity:0,
    image:Placeholder_img,
    name:"POLARIZED BROWN SUNGLASSES",
    price:50.00,
    addtocartbutton:addtocart,
  },
  {
    itemnumber:6,
    quantity:0,
    image:Placeholder_img,
    name:"SANDALS",
    price:15.00,
    addtocartbutton:addtocart,
  },
];


function Eshopitems() {
  return (
    <div className="eshopitems_parent" id="shop">
      <div className="eshopitems">

        <SectionHeading text="ITEM LIBRARY" />
        <div className="eshopitems_cards_container">
          {esi.map(i => (
            <div className="eshopitems_cards">
              <div className="eshopitems_cards_contents">
                <span>
                  <img src={i.image} className="eshopitems_cards_contents_image" />
                  <div className="eshopitems_cards_contents_name"><span className="fontsize1">{i.name}</span></div>
                  <div className="eshopitems_cards_contents_price"><span className="fontsize1" style={{color:'#646464'}}>{"$" + i.price}</span></div>
                  <div className="eshopitems_cards_contents_addtocartbutton" onClick={function() {
                    esi[i.itemnumber-1].quantity+=1;
                    document.getElementById('cart_item' + i.itemnumber).style.display = "block";
                    document.getElementById('cart_item' + i.itemnumber + '_image').src = i.image;
                    document.getElementById('cart_item' + i.itemnumber + '_name').innerHTML = i.name;
                    document.getElementById('cart_item' + i.itemnumber + '_quantity').innerHTML = "$" + i.price + "\xa0\xa0·\xa0\xa0x" + i.quantity + "\xa0\xa0·\xa0\xa0" + "$" + i.price*i.quantity;
                  }}>
                    <div className="fontsize1">{i.addtocartbutton}</div></div>
                </span>
              </div>
            </div>
          ))}
        </div>



      </div>
    </div>
  )
}


export default Eshopitems;
