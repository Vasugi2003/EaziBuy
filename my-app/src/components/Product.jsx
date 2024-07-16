import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import '../style/ProductCard.css'
import TopBar from './TopBar';

function Products() {
    const [list, setList] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [apiRes, setApiRes] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [sortOption, setSortOption] = useState('default');

    useEffect(() => {
        fetch("https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4")
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setApiRes(json)
                setList(json)
                const c = json.map((obj) => obj.category)
                setCategory([...new Set(c)])
            })
            .catch();
    }, []);

    useEffect(() => {
        let filteredList = apiRes;

        if (selectedCategory) {
            filteredList = filteredList.filter(obj => obj.category === selectedCategory);
        }

        if (searchInput) {
            filteredList = filteredList.filter(obj => obj.title.toLowerCase().includes(searchInput.toLowerCase()));
        }

        // Apply sorting based on sortOption
        filteredList = [...filteredList].sort((a, b) => {
            if (sortOption === 'low-to-high') {
                return a.price - b.price;
            }
            if (sortOption === 'high-to-low') {
                return b.price - a.price;
            }
            return 0;
        });

        setList(filteredList);
    }, [selectedCategory, searchInput, sortOption, apiRes]);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    return (
        <>
            <TopBar
                category={category}
                setSelectedCategory={setSelectedCategory}
                setSearchInput={setSearchInput}
                searchInput={searchInput}
            />
            <div className='sort-container'>
                <label htmlFor="sort">Sort by Price: </label>
                <select id="sort" value={sortOption} onChange={handleSortChange}>
                    <option value="default">Default</option>
                    <option value="low-to-high">Low to High</option>
                    <option value="high-to-low">High to Low</option>
                </select>
            </div>
            <div className='pro'>
                {list.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        </>
    )
}

export default Products
