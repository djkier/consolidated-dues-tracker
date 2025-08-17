import { useState, useEffect } from 'react'
import { Category, Summary } from './main-table-comps/Sections'
import ExpenseRow from './main-table-comps/InputComps'

const CATEGORY_AND_ITEMS = {
    "House Expense": ["Meralco Main", "Meralco Apartment", "Maynilad Main", "Converge (Internet)"],
    "Clinic": ["Meralco", "Maynilad", "S2S Internet"],
    "Tax": ["2551M", "0619e", "1701q", "Others"],
    "Contributions": ["SSS", "PhilHealth", "PagIBIG"]
}

const stateInitKeysAndValues = () => {
        const newObj = {};
        Object.entries(CATEGORY_AND_ITEMS).map(([__, values]) => {
            values.map(value => {
                newObj[value] = 0
            });
        });
        return newObj;
}


export default function MainTable() {
    const [ inputValues, setInputValues ] = useState(stateInitKeysAndValues);
    const [ availableCash, setAvailableCash ] = useState(0.00);

    const total = Object.values(inputValues).reduce((acc, curr) => acc + curr, 0)
    const difference = availableCash - total;

    useEffect(() => {
        console.log(total);
    }, [inputValues])
    

    const handleChange = (e) => {

        setInputValues((prev) => ({
            ...prev,
            [e.target.name]: Number(e.target.value)
        }))
    };

    const handleAvailableCash = (e) => {

        setAvailableCash(Number(e.target.value));
    }
    

    return (
        <div className="border w-sm p-4 rounded-xl">
            {Object.keys(CATEGORY_AND_ITEMS).map(key => {
                return (
                    <Category type={key} key={key}>
                        {CATEGORY_AND_ITEMS[key].map((item, i)=> {
                            return (
                                <ExpenseRow value={inputValues[item]} 
                                    name={item}
                                    onChange={handleChange} 
                                    key={item} 
                                    description={item} 
                                    amount="1000" 
                                    lastOfType={i === CATEGORY_AND_ITEMS[key].length - 1} />
                            );
                        })}
                    </Category>
                    
                );
            })}
            <Summary total={total} availableCash={availableCash} handleAvailableCash={handleAvailableCash} difference={difference}/>

        </div>
    );
}
