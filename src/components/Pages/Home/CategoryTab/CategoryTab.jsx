import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToyCard from './CategoryToyCard';

const CategoryTab = () => {

    const [toys, setToys] = useState([])

    useEffect(() => {
        handletabs("SportsCar")
    }, [])



    const handletabs = (subCaterory) => {

        console.log(subCaterory);
        fetch(`https://b7a11-toy-marketplace-server-side-mahfuz091.vercel.app/category?subcategory=${subCaterory}`)
            .then(res => res.json())
            .then(data => setToys(data))

    }
    return (
        <div className="wrapper text-center ">
            <h2 className="text-3xl font-bold mb-8 mt-32">Shop By Category</h2>
            <Tabs>
                <TabList className='bg-[#f379a7]' >
                    <Tab onClick={() => handletabs('SportsCar')} > Sports car</Tab>
                    <Tab onClick={() => handletabs('Truck')} >Truck</Tab>
                    <Tab onClick={() => handletabs('FireTruck')} >Mini Fire Truck</Tab>
                </TabList>

                <TabPanel>
                    <div className="mx-auto py-5 px-12 lg:w-[900px] mt-11">
                        <div className="lg:flex gap-6">
                            {
                                toys.map(toy => <CategoryToyCard key={toy._id} toy={toy}></CategoryToyCard>)
                            }


                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="mx-auto py-5 px-12 lg:w-[900px] mt-11">
                        <div className="lg:flex gap-6">
                            {
                                toys.map(toy => <CategoryToyCard key={toy._id} toy={toy}></CategoryToyCard>)
                            }


                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="mx-auto py-5 px-12 lg:w-[900px] mt-11">
                        <div className="lg:flex gap-6">
                            {
                                toys.map(toy => <CategoryToyCard key={toy._id} toy={toy}></CategoryToyCard>)
                            }


                        </div>
                    </div>
                </TabPanel>
            </Tabs>

        </div >
    );
};

export default CategoryTab;