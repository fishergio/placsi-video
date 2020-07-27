import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import useTvShowsApi from '../hooks/useTvShowsApi';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
    const initialState = useTvShowsApi(API);
    console.log(initialState)
    return initialState.length === 0 ? <h1>Loading...</h1> : (
        <Layout>
            <Header/>
            <Search/>
            { initialState.mylist?.length > 0 && (
                <Categories title="Mi lista">
                    <Carousel>
                        { initialState.mylist?.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            )}

            { initialState.trends?.length > 0 && (
                <Categories title="Tendencias">
                    <Carousel>
                        { initialState.trends?.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            )}

            { initialState.originals?.length > 0 && (
                <Categories title="Tendencias">
                    <Carousel>
                        { initialState.originals?.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            )}

            <Footer/>
        </Layout>
    )
}

export default App;