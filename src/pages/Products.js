import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import image1 from './images/japanese_maple.jpg';
import image2 from './images/gravel.jpg';
import image3 from './images/stepping_stones.jpg';
import image4 from './images/bamboo_rake.png';
import image5 from './images/buddha_ornament.jpg';
import image6 from './images/stone_bench.jpg';
import image7 from './images/garden_shears.jpg';
import image8 from './images/japanese_lantern.jpg';
import image9 from './images/rhododendron.jpg';
import image10 from './images/bamboo_poles.jpg';
import { useState } from 'react';
import TotalPrice from '../components/TotalPrice';

// Create a Products page displaying 10 items 
export default function Products() {

    let productItems = [];

    function Garden(id, image, title, description, price, colour) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
        this.colour = colour;
    };

   let garden1 = new Garden(
    "1",
    image1,
    "Japanese Maple (Acer) Tree",
    "The Acer has new foliage in spring that is deep purple-red in colour, maintaining this colour throughout summer and turning slightly more reddish-green and bronze.",
    145,
    ["Red", "Gold", "Green"]
   );
   let garden2 = new Garden(
    "2",
    image2,
    "Zen Gravel",
    "Our gravel is the ideal ground cover to use in your Japanese garden. This attractive material is what you would find in Karesansui style gardens in Japan.",
    75.50,
    ["White", "Grey", "Sand"]
   );
   let garden3 = new Garden(
    "3",
    image3,
    "Stepping Stones",
    "These stepping stones are irregular in shape with flat tops making them ideal for a stepping stone pathway. A natural finish and unique markings create an interesting pathway.",
    43,
    ["Grey", "White", "Sand"]
   );
   let garden4 = new Garden(
    "4",
    image4,
    "Bamboo Rake",
    "This attractive Japanese bamboo rake is made from natural bamboo. Typically these are used in autumn to rake up fallen leaves, however they are also great when as a decorative item.",
    32.50,
    ["Natural", "Red", "Blue"]
   );
   let garden5 = new Garden(
    "5",
    image5,
    "Buddha Ornament",
    "Our attractive Buddha is hand carved to the highest standards from solid silver grey granite and is approx. 45cm tall. It makes a lovely feature beside a Koi pond.",
    299,
    ["White", "Grey", "Sand"]
   );
   let garden6 = new Garden(
    "6",
    image6,
    "Natural Stone Bench",
    "Our unique natural stone benches are made by slicing very large river boulders to form the seat slabs. The top surface is polished to expose the colour and beauty of the stone.",
    385,
    ["Grey", "White", "Sand"]
   );
   let garden7 = new Garden(
    "7",
    image7,
    "Japanese Shears",
    "Made in Japan, these handy mini shears with their 125mm SK stainless steel blades are perfect for jobs in tight spots in the garden, or fine topiary work.",
    48,
    ["Red", "Blue", "Black"]
   );
   let garden8 = new Garden(
    "8",
    image8,
    "Japanese Lantern",
    "The Japanese stone lantern is hand carved from natural silver-grey granite in 4 pieces, with a distinctive square form and carved detailing on the light box and base.",
    125,
    ["Grey", "Brown", "White"]
   );
   let garden9 = new Garden(
    "9",
    image9,
    "Rhododendron",
    "The Rhododendron is a dwarf evergreen shrub that flowers in summer. A brilliant replacement for box hedging as it tolerates pruning and does not suffer from box blight.",
    23.99,
    ["Pink", "Purple", "Blue"]
   );
   let garden10 = new Garden(
    "10",
    image10,
    "Bamboo Poles",
    "All of the poles are natural bamboo, therefore there may be some natural blemishes, splits and colour differences between products and all bamboo products will discolour with age.",
    14.99,
    ["Natural", "White", "Blue"]
   );

   productItems.push(garden1, garden2, garden3, garden4, garden5, garden6, garden7, garden8, garden9, garden10);


   // Create variables to set state
   const [colours, setColour] = useState([]);
   const [basketItem, setBasketItem] = useState(0);   

   // Create a variable to check if there is already a value in the local storage, to 
   // prevent the totalPrice from resetting to 0 on navigation back to Products page
   let storedTotal = "";
   try {
    storedTotal = localStorage.getItem("totalPrice");
   }catch{
    storedTotal = "";
   };
   
   const [totalPrice, setTotalPrice] = useState(Number(storedTotal));
   
   localStorage.setItem("totalPrice", totalPrice);

   // Create a function to manage purchase of items and total price
   function updateBasket(basketItem) {
    setBasketItem(basketItem);
    localStorage.getItem("totalPrice", totalPrice);
    setTotalPrice(Number(totalPrice) + Number(basketItem));
    localStorage.setItem("totalPrice", totalPrice);
   };
 
    // Create a function to select the colour from each item's dropdown menu
   function updateColour(selColour, selId) {
    setColour(colours.filter((obj) => obj.id !== selId));
    setColour([{ id: selId, colour: selColour},
            ...colours]);
   };

   // Create a function to update the text on the dropdown button with the selected colour
   function getColour(id) {
    
    let thisColour = "";
    try {
         thisColour = colours.find((obj) => obj.id === id).colour;
    }
    catch {
         thisColour = "Select a Colour";
    }
    return thisColour;
   };

   
   // Create the card layout for each item
    return (
        <div>
            {storedTotal > 0 && <TotalPrice price={localStorage.getItem("totalPrice")} />}
            <Row md={5} className="product_grid">
                {productItems.map((item)=>(
                    <Col key={item.id}>
                        <Card style={{ height: '28rem' }} className="item_card" fluid="true">
                            <Card.Img variant="top" src={item.image} alt="product image" />
                            <Card.Body>
                            <Card.Title style={{ fontSize: '1em' }} className="product_title">{item.title}</Card.Title>
                            <Card.Text style={{ fontSize: '1em'}}>£{item.price.toFixed(2)}</Card.Text>
                            <Card.Text style={{ fontSize: '.75em'}} className="description">{item.description}</Card.Text>
                            <Button
                                onClick={((event) => updateBasket(event.target.value))} 
                                className="buyBtn"
                                value={item.price}
                                >Buy</Button>
                            <Dropdown >
                                <Dropdown.Toggle variant="secondary" key={item.id}>{getColour(item.id)}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => updateColour(item.colour[0], item.id)}>{item.colour[0]}</Dropdown.Item>
                                    <Dropdown.Item onClick={() => updateColour(item.colour[1], item.id)}>{item.colour[1]}</Dropdown.Item>
                                    <Dropdown.Item onClick={() => updateColour(item.colour[2], item.id)}>{item.colour[2]}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}