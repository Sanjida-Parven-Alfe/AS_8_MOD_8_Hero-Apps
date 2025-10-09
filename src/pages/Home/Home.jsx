import React from 'react';
import Banner from '../../components/Banner/Banner';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();
    console.log(data)

    return (
        <div className='bg-[#f2f2f2]'>
            <Banner></Banner>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;