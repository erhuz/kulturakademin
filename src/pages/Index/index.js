import React from 'react';
import DefaultLayout from '../../layouts/Default';
import HeroSlider from '../../components/HeroSlider';
import SwipeContainer from '../../components/SwipeContainer';
import './Index.css';

const testJson = [
  {
    title: 'Mia har dansat hela sitt liv',
    description: 'Jag hör hemma här och känner mig bekväm. Seriöst och professionellt utan att vara tråkigt. Vi rör oss ju i kulturella sammanhang där kreativitet',
    img: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  },
  {
    title: 'Mia har dansat hela sitt liv',
    description: 'Jag hör hemma här och känner mig bekväm. Seriöst och professionellt utan att vara tråkigt. Vi rör oss ju i kulturella sammanhang där kreativitet',
    img: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    title: 'Mia har dansat hela sitt liv',
    description: 'Jag hör hemma här och känner mig bekväm. Seriöst och professionellt utan att vara tråkigt. Vi rör oss ju i kulturella sammanhang där kreativitet',
    img: 'https://images.unsplash.com/photo-1502519144081-acca18599776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  },
  {
    title: 'Mia har dansat hela sitt liv',
    description: 'Jag hör hemma här och känner mig bekväm. Seriöst och professionellt utan att vara tråkigt. Vi rör oss ju i kulturella sammanhang där kreativitet',
    img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  }
]

  const testItems = [

    {
      index : 1,
      backgroundUrl : 'https://images.unsplash.com/photo-1568622155247-675b7a01d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
    {
      index : 2,
      backgroundUrl : 'https://images.unsplash.com/photo-1568502748968-996f6a82e508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80',
    },
    {
      index : 3,
      backgroundUrl : 'https://images.unsplash.com/photo-1568478555168-38688f1f58fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
    },
    {
      index : 4,
      backgroundUrl : 'https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
    {
      index : 5,
      backgroundUrl : 'https://images.unsplash.com/photo-1568622155247-675b7a01d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
    {
      index : 6,
      backgroundUrl : 'https://images.unsplash.com/photo-1568502748968-996f6a82e508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80',
    },
    {
      index : 7,
      backgroundUrl : 'https://images.unsplash.com/photo-1568478555168-38688f1f58fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
    },
    {
      index : 8,
      backgroundUrl : 'https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
  ];

const Index = () => (
  <DefaultLayout>
    {/* Put Index content here*/}
    <HeroSlider slides={testJson}/>
    <SwipeContainer items={testItems}/>
    <SwipeContainer items={testItems}/>
    <SwipeContainer items={testItems}/>
    <SwipeContainer items={testItems}/>
    <SwipeContainer items={testItems}/>
    <SwipeContainer items={testItems}/>
    <SwipeContainer items={testItems}/>
  </DefaultLayout>
);

export default Index;
