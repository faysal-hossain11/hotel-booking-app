import Gallery from '@/app/components/hotel/details/Gallery';
import Overview from '@/app/components/hotel/details/Overview';
import Summary from '@/app/components/hotel/details/Summary';
import React from 'react';

const HotelDetalPage = () => {
    return (
        <>
         <Summary />
         <Gallery />
         <Overview />   
        </>
    );
};

export default HotelDetalPage;