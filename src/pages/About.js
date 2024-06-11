import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Stack from 'react-bootstrap/Stack';
import TotalPrice from '../components/TotalPrice';
import logo from './images/yoga.svg';
import picture1 from './images/bridge.jpeg';
import picture2 from './images/summer_house.jpg';

// Create an About page with a logo, description, store photos and contact section
export default function About() {

    let totalPrice = localStorage.getItem("totalPrice")

    return (
        <div>
            {totalPrice > 0 && <TotalPrice price={totalPrice}/>}

            <Stack gap={3}>
            <Figure>
                <Figure.Image width={150} height={150} alt="150x150" src={logo}/>
                <Figure.Caption>The Zen Gardener, opened in 2016, is where you will find</Figure.Caption>
                <Figure.Caption>everything you need to create a relaxing Zen garden at home,</Figure.Caption>
                <Figure.Caption>from traditional Japanese plants and trees, to garden ornaments,</Figure.Caption>
                <Figure.Caption>benches and tools.</Figure.Caption>
            </Figure>

            <Figure>
                <Stack id="about_images" direction="horizontal" gap={5}>
                    <div>
                        <Figure.Image width={300} alt="bridge" src={picture1}/>
                        <Figure.Caption>An example of one of our stone bridges.</Figure.Caption>
                    </div>
                    <div>
                        <Figure.Image width={300} alt="summer_house" src={picture2}/>
                        <Figure.Caption>One of our summer houses on display.</Figure.Caption>
                    </div>
                </Stack>
            </Figure>
            <h4>Contact us</h4>
            <Figure>
                <Figure.Caption>zengardener@email.com</Figure.Caption>
                <Figure.Caption>0208 341 9978</Figure.Caption>
            </Figure>
            </Stack>
        </div>
    );
}