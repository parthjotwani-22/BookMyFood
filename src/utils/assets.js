import bookmyfoodlogo from './../assets/pngs/bookmyshow-logo.png';
import bgFoodCourt from './../assets/FoodCourtBg.jpg';
import bklogo from './../assets/Burgerking.png';
import jblogo from './../assets/JBRestaurant.png';
import domlogo from './../assets/dominos.png';
import hoccologo from './../assets/hocco.png';
import foodobject from './../assets/food-product.png';
export default {
  bookmyfoodlogo: bookmyfoodlogo,
  foodobject: foodobject,
  bgFoodCourt: bgFoodCourt,
  foodcourts: [
    {
      id: 1,
      location: 'Ahmedabad One : The All Food',
      img: bgFoodCourt,
      time: '8:00 AM to 1:00 AM',
      restaurants: [1, 2, 4],
    },
    {
      id: 2,
      location: 'Ahmedabad One : The All Food',
      img: bgFoodCourt,
      time: '8:00 AM to 1:00 AM',
      restaurants: [2, 3, 1],
    },
    {
      id: 3,
      location: 'Ahmedabad One : The All Food',
      img: bgFoodCourt,
      time: '8:00 AM to 1:00 AM',
      restaurants: [1, 3, 4],
    },
  ],
  fooditems: {
    'Burger King': [
      {
        id: 1,
        name: 'Classic Veg Burger',
        price: 10,
        restaurant: 'Burger King',
        quantity: 1,
        description: 'A classic chessy burger with a veg patty',
      },
      {
        id: 2,
        name: 'Classic Non Veg Burger',
        price: 15,
        restaurant: 'Burger King',
        quantity: 1,
        description: 'A classic chessy burger with a non-veg patty',
      },
      {
        id: 3,
        name: 'French-Fries',
        price: 5,
        restaurant: 'Burger King',
        quantity: 1,
        description: 'Who dose Not love fries. Salted Potato French-Fries',
      },
      {
        id: 4,
        name: 'Coke',
        price: 5,
        restaurant: 'Burger King',
        quantity: 1,
        description: 'A refreshing coke just for you',
      },
    ],
    'Jay Bhavani': [
      {
        id: 1,
        name: 'Vada Pav',
        price: 5,
        restaurant: 'Jay Bhavani',
        quantity: 1,
        description: 'A classic chessy burger with a veg patty',
      },
      {
        id: 2,
        name: 'Fried Rice',
        price: 5,
        restaurant: 'Jay Bhavani',
        quantity: 1,
        description: 'Spicy Chinese Rice Made in Soy Sauce',
      },
      {
        id: 3,
        name: 'Pav-bhaji',
        price: 5,
        restaurant: 'Jay Bhavani',
        quantity: 1,
        description: 'Mix Bhaji with Pav ',
      },
      {
        id: 4,
        name: 'Coke',
        price: 5,
        restaurant: 'Jay Bhavani',
        quantity: 1,
        description: 'A refreshing coke just for you',
      },
    ],
    '1944 Hocco Eatery': [
      {
        id: 1,
        name: 'Vada Pav',
        price: 5,
        restaurant: '1944 Hocco Eatery',
        quantity: 1,
        description: 'A classic chessy burger with a veg patty',
      },
      {
        id: 2,
        name: 'Fried Rice',
        price: 5,
        restaurant: '1944 Hocco Eatery',
        quantity: 1,
        description: 'Spicy Chinese Rice Made in Soy Sauce',
      },
      {
        id: 3,
        name: 'Pav-bhaji',
        price: 5,
        restaurant: '1944 Hocco Eatery',
        quantity: 1,
        description: 'Mix Bhaji with Pav ',
      },
      {
        id: 4,
        name: 'Coke',
        price: 5,
        restaurant: '1944 Hocco Eatery',
        quantity: 1,
        description: 'A refreshing coke just for you',
      },
    ],
    'Dominos Pizza': [
      {
        id: 1,
        name: 'Paneer Pizza',
        price: 5,
        restaurant: 'Dominos Pizza',
        quantity: 1,
        description: 'A classic chessy Paneer Pizza',
      },
      {
        id: 2,
        name: 'FarmHouse Pizza',
        price: 10,
        restaurant: 'Dominos Pizza',
        quantity: 1,
        description: 'Pizza with different vegies and sauces',
      },
      {
        id: 3,
        name: 'Garlic Bread',
        price: 5,
        restaurant: 'Dominos Pizza',
        quantity: 1,
        description: 'Soft Bread With Garlics Taste',
      },
      {
        id: 4,
        name: 'Coke',
        price: 5,
        restaurant: 'Dominos Pizza',
        quantity: 1,
        description: 'A refreshing coke just for you',
      },
    ],
  },
  restaurants: [
    {
      id: 1,
      name: 'Burger King',
      type: 'Fast Food',
      img: bklogo,
    },
    {
      id: 2,
      name: 'Jay Bhavani',
      type: 'Indian Street Food',
      img: jblogo,
    },
    {
      id: 3,
      name: 'Dominos Pizza',
      type: 'Fast Food',
      img: domlogo,
    },
    {
      id: 4,
      name: '1944 Hocco Eatery',
      type: 'Punjabi Cusine',
      img: hoccologo,
    },
  ],
};
