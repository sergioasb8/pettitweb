import Image from 'react-bootstrap/Image';

import Personaliza from '../../img/icons/pastelIcon.png';
import IngCake from '../../img/products/IngCake.png';
import BeerCake from '../../img/products/beerCake.png';
import FlowerCake from '../../img/products/FlowerCake.jpg';
import UnicornFondantCake from '../../img/products/UnicornCute.jpg';
import ChocolateCake from '../../img/products/ChocolateCake.png';
import BasicCake from '../../img/products/BasicCake.jpg';
import SuperCake from '../../img/products/SuperCake.jpg';
import LetterCake from '../../img/products/LetterCake.png';
import AnimalCake from '../../img/products/pastelAnimales.jpg';
import BikeCake from '../../img/products/bikeCake.png';
import HPCake from '../../img/products/HPCake.png';
import CocaCola from '../../img/products/CocaColaCake.png';
import Graduation from '../../img/products/graduacionCake.jpg';
import PlayCake from '../../img/products/Play.png';
import UnicornCake from '../../img/products/UnicornCake.jpg';
import SnakeCake from '../../img/products/SnakeCake.png';
import BearCake from '../../img/products/BearCake.png';

import HearthBrownie from '../../img/products/BrownieHearth.png';
import SquareBrownie from '../../img/products/BrownieSquare.png';

import FondantCupcake from '../../img/products/CupCakeFondant.png';
import CremaCupCake from '../../img/products/GlaceadoCupCake.jpg';

import Pie from '../../img/products/Pie.jpg';

const data = {
    products: [
        {
            id: 'Torta1',
            name: 'Personaliza tu torta 1/4 libra',
            pricesmall: 0,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={Personaliza} alt='Personaliza tu torta' className='CakeImage'/>
        },
        {
            id: 'Torta2',
            name: 'Torta de Chocolate 1/4 libra',
            pricesmall: 45000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={ChocolateCake} alt='Torta de Chocolate' className='CakeImage'/>
        },
        {
            id: 'Torta3',
            name: 'Torta de flores 1/4 libra',
            pricesmall: 50000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={FlowerCake} alt='Torta de Flores' className='CakeImage'/>
        },
        {
            id: 'Torta4',
            name: 'Torta unicornio en fondant 1/4 libra',
            pricesmall: 60000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={UnicornFondantCake} alt='Torta unicornio en fondant' className='CakeImage'/>
        },
        {
            id: 'Torta5',
            name: 'Torta jarra de cerveza 1/4 libra',
            pricesmall: 45000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={BeerCake} alt='Torta jarra de cerveza' className='CakeImage'/>
        },
        {
            id: 'Torta6',
            name: 'Torta ingeniero / arquitecto 1/4 libra',
            pricesmall: 50000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={IngCake} alt='Torta Ingeniero / Arquitecto' className='CakeImage'/>
        },
        {
            id: 'Torta7',
            name: 'Torta básica 1/4 libra',
            pricesmall: 35000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={BasicCake} alt='Torta básica' className='CakeImage'/>
        },
        {
            id: 'Torta8',
            name: 'Torta super hero 1/4 libra',
            pricesmall: 45000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={SuperCake} alt='Torta super heroes' className='CakeImage'/>
        }, 
        {
            id: 'Torta9',
            name: 'Torta letra o número 1/4 libra',
            pricesmall: 40000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={LetterCake} alt='Torta letra o número' className='CakeImage'/>
        }, 
        {
            id: 'Torta10',
            name: 'Torta bicicleta 1/4 libra',
            pricesmall: 45000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={BikeCake} alt='Torta de cicla' className='CakeImage'/>
        },   
        {
            id: 'Torta11',
            name: 'Torta animales 1/4 libra',
            pricesmall: 50000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={AnimalCake} alt='Torta de animal' className='CakeImage'/>
        },   
        {
            id: 'Torta12',
            name: 'Torta Coca Cola 1/4 libra',
            pricesmall: 45000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={CocaCola} alt='Torta Coca Cola' className='CakeImage'/>
        },
        {
            id: 'Torta13',
            name: 'Torta Harry Potter 1/4 libra',
            pricesmall: 45000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={HPCake} alt='Torta Harry Potter' className='CakeImage'/>
        },
        {
            id: 'Torta14',
            name: 'Torta Control de Play 1/4 libra',
            pricesmall: 60000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={PlayCake} alt='Torta control de play' className='CakeImage'/>
        },
        {
            id: 'Torta15',
            name: 'Torta de grado 1/4 libra',
            pricesmall: 45000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={Graduation} alt='Torta de grado' className='CakeImage'/>
        },
        {
            id: 'Torta16',
            name: 'Torta de unicornio 1/4 libra',
            pricesmall: 50000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={UnicornCake} alt='Torta de unicornio' className='CakeImage'/>
        },
        {
            id: 'Torta17',
            name: 'Torta de serpiente 1/4 libra',
            pricesmall: 60000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={SnakeCake} alt='Torta de serpiente' className='CakeImage'/>
        },
        {
            id: 'Torta18',
            name: 'Torta de oso 1/4 libra',
            pricesmall: 50000,
            amount: 0,
            category: 'tortasmall',
            Image: <Image src={BearCake} alt='Torta de oso' className='CakeImage'/>
        },
        {
            id: 'Torta19',
            name: 'Personaliza tu torta 1/2 libra',
            pricesmall: 0,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={Personaliza} alt='Personaliza tu torta' className='CakeImage'/>
        },
        {
            id: 'Torta20',
            name: 'Torta de Chocolate 1/2 libra',
            pricesmall: 65000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={ChocolateCake} alt='Torta de Chocolate' className='CakeImage'/>
        },
        {
            id: 'Torta21',
            name: 'Torta de flores 1/2 libra',
            pricesmall: 70000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={FlowerCake} alt='Torta de Flores' className='CakeImage'/>
        },
        {
            id: 'Torta22',
            name: 'Torta unicornio en fondant 1/2 libra',
            pricesmall: 80000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={UnicornFondantCake} alt='Torta unicornio en fondant' className='CakeImage'/>
        },
        {
            id: 'Torta23',
            name: 'Torta jarra de cerveza 1/2 libra',
            pricesmall: 65000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={BeerCake} alt='Torta jarra de cerveza' className='CakeImage'/>
        },
        {
            id: 'Torta24',
            name: 'Torta ingeniero / arquitecto 1/2 libra',
            pricesmall: 65000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={IngCake} alt='Torta Ingeniero / Arquitecto' className='CakeImage'/>
        },
        {
            id: 'Torta25',
            name: 'Torta básica 1/2 libra',
            pricesmall: 55000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={BasicCake} alt='Torta básica' className='CakeImage'/>
        },
        {
            id: 'Torta26',
            name: 'Torta super hero 1/2 libra',
            pricesmall: 65000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={SuperCake} alt='Torta super heroes' className='CakeImage'/>
        }, 
        {
            id: 'Torta27',
            name: 'Torta letra o número 1/2 libra',
            pricesmall: 60000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={LetterCake} alt='Torta letra o número' className='CakeImage'/>
        }, 
        {
            id: 'Torta28',
            name: 'Torta bicicleta 1/2 libra',
            pricesmall: 65000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={BikeCake} alt='Torta de cicla' className='CakeImage'/>
        },   
        {
            id: 'Torta29',
            name: 'Torta animales 1/2 libra',
            pricesmall: 70000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={AnimalCake} alt='Torta de animal' className='CakeImage'/>
        },   
        {
            id: 'Torta30',
            name: 'Torta Coca Cola 1/2 libra',
            pricesmall: 65000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={CocaCola} alt='Torta Coca Cola' className='CakeImage'/>
        },
        {
            id: 'Torta31',
            name: 'Torta Harry Potter 1/2 libra',
            pricesmall: 65000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={HPCake} alt='Torta Harry Potter' className='CakeImage'/>
        },
        {
            id: 'Torta32',
            name: 'Torta Control de Play 1/2 libra',
            pricesmall: 80000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={PlayCake} alt='Torta control de play' className='CakeImage'/>
        },
        {
            id: 'Torta33',
            name: 'Torta de grado 1/2 libra',
            pricesmall: 65000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={Graduation} alt='Torta de grado' className='CakeImage'/>
        },
        {
            id: 'Torta34',
            name: 'Torta de unicornio 1/2 libra',
            pricesmall: 70000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={UnicornCake} alt='Torta de unicornio' className='CakeImage'/>
        },
        {
            id: 'Torta35',
            name: 'Torta de serpiente 1/2 libra',
            pricesmall: 80000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={SnakeCake} alt='Torta de serpiente' className='CakeImage'/>
        },
        {
            id: 'Torta36',
            name: 'Torta de oso 1/2 libra',
            pricesmall: 70000,
            amount: 0,
            category: 'TortaMedium',
            Image: <Image src={BearCake} alt='Torta de oso' className='CakeImage'/>
        },
        {
            id: 'Torta37',
            name: 'Personaliza tu torta 1 libra',
            pricesmall: 0,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={Personaliza} alt='Personaliza tu torta' className='CakeImage'/>
        },
        {
            id: 'Torta38',
            name: 'Torta de Chocolate 1 libra',
            pricesmall: 90000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={ChocolateCake} alt='Torta de Chocolate' className='CakeImage'/>
        },
        {
            id: 'Torta39',
            name: 'Torta de flores 1 libra',
            pricesmall: 95000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={FlowerCake} alt='Torta de Flores' className='CakeImage'/>
        },
        {
            id: 'Torta40',
            name: 'Torta unicornio en fondant 1 libra',
            pricesmall: 110000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={UnicornFondantCake} alt='Torta unicornio en fondant' className='CakeImage'/>
        },
        {
            id: 'Torta41',
            name: 'Torta jarra de cerveza 1 libra',
            pricesmall: 90000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={BeerCake} alt='Torta jarra de cerveza' className='CakeImage'/>
        },
        {
            id: 'Torta42',
            name: 'Torta ingeniero / arquitecto 1 libra',
            pricesmall: 95000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={IngCake} alt='Torta Ingeniero / Arquitecto' className='CakeImage'/>
        },
        {
            id: 'Torta43',
            name: 'Torta básica 1 libra',
            pricesmall: 80000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={BasicCake} alt='Torta básica' className='CakeImage'/>
        },
        {
            id: 'Torta44',
            name: 'Torta super hero 1 libra',
            pricesmall: 90000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={SuperCake} alt='Torta super heroes' className='CakeImage'/>
        }, 
        {
            id: 'Torta45',
            name: 'Torta letra o número 1 libra',
            pricesmall: 80000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={LetterCake} alt='Torta letra o número' className='CakeImage'/>
        }, 
        {
            id: 'Torta46',
            name: 'Torta bicicleta 1 libra',
            pricesmall: 85000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={BikeCake} alt='Torta de cicla' className='CakeImage'/>
        },   
        {
            id: 'Torta47',
            name: 'Torta animales 1 libra',
            pricesmall: 90000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={AnimalCake} alt='Torta de animal' className='CakeImage'/>
        },   
        {
            id: 'Torta48',
            name: 'Torta Coca Cola 1 libra',
            pricesmall: 85000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={CocaCola} alt='Torta Coca Cola' className='CakeImage'/>
        },
        {
            id: 'Torta49',
            name: 'Torta Harry Potter 1 libra',
            pricesmall: 90000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={HPCake} alt='Torta Harry Potter' className='CakeImage'/>
        },
        {
            id: 'Torta50',
            name: 'Torta Control de Play 1 libra',
            pricesmall: 110000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={PlayCake} alt='Torta control de play' className='CakeImage'/>
        },
        {
            id: 'Torta51',
            name: 'Torta de grado 1 libra',
            pricesmall: 85000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={Graduation} alt='Torta de grado' className='CakeImage'/>
        },
        {
            id: 'Torta52',
            name: 'Torta de unicornio 1 libra',
            pricesmall: 95000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={UnicornCake} alt='Torta de unicornio' className='CakeImage'/>
        },
        {
            id: 'Torta53',
            name: 'Torta de serpiente 1 libra',
            pricesmall: 110000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={SnakeCake} alt='Torta de serpiente' className='CakeImage'/>
        },
        {
            id: 'Torta54',
            name: 'Torta de oso 1 libra',
            pricesmall: 90000,
            amount: 0,
            category: 'TortaBig',
            Image: <Image src={BearCake} alt='Torta de oso' className='CakeImage'/>
        },
        {
            id: 'Brownie1',
            name: 'Brownie corazón caja X6',
            pricesmall: 23000,
            pricemedium: 23000,
            pricebig: 23000,
            price: 0,
            amount: 0,
            category: 'brownie',
            Image: <Image src={HearthBrownie} alt='Brownie' className='CakeImage'/>
        },
        {
            id: 'Brownie2',
            name: 'Brownie square caja X6',
            pricesmall: 23000,
            pricemedium: 23000,
            pricebig: 23000,
            price: 0,
            amount: 0,
            category: 'brownie',
            Image: <Image src={SquareBrownie} alt='Brownie' className='CakeImage'/>
        },
        {
            id: 'CupCake1',
            name: 'Caja X6  en Fondant',
            pricesmall: 30000,
            pricemedium: 30000,
            pricebig: 30000,
            price: 0,
            amount: 0,
            category: 'cupcake',
            Image: <Image src={FondantCupcake} alt='CupCake Fondant' className='CakeImage'/>
        },
        {
            id: 'CupCake2',
            name: 'Caja X6 en glaceado',
            pricesmall: 25000,
            pricemedium: 25000,
            pricebig: 25000,
            price: 0,
            amount: 0,
            category: 'cupcake',
            Image: <Image src={CremaCupCake} alt='CupCake Crema' className='CakeImage'/>
        },
        {
            id: 'Pie1',
            name: 'Pie',
            pricesmall: 30000,
            pricemedium: 30000,
            pricebig: 30000,
            price: 0,
            amount: 0,
            category: 'pie',
            Image: <Image src={Pie} alt='Pie' className='CakeImage'/>
        }
    ]
}

export default data;