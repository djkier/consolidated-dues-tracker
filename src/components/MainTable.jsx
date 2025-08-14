import { useState, useEffect } from 'react'

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
                newObj[value] = 0;
            });
        });

        
        return newObj;
}


export default function MainTable() {
    const [ inputValues, setInputValues ] = useState(stateInitKeysAndValues);

    useEffect(() => {
        Object.entries(inputValues).forEach(item => console.log(`${item[0]} = ${item[1]}`));
    }, [inputValues])

    

    return (
        <div className="border w-sm p-4 rounded-xl">
            {Object.keys(CATEGORY_AND_ITEMS).map(key => {
                return (
                    <Category type={key} key={key}>
                        
                        {CATEGORY_AND_ITEMS[key].map((item, i)=> {
                            return (
                                <ExpenseRow key={item} description={item} amount="1000" lastOfType={i === CATEGORY_AND_ITEMS[key].length - 1} />
                            );
                        })}
                    </Category>
                    
                );
            })}
            <Summary />

        </div>
    );
}

function ExpenseRow({ description, amount, lastOfType, customRowStyle, customDescStyle }) {
    const newCustomDescStyle = customDescStyle ? customDescStyle : `<border-cyan-600></border-cyan-600>`;
    const newCustomRowStyle = customRowStyle ? customRowStyle : '';
    const borderOfNoneLastType = !lastOfType ? `border-b border-cyan-600` : '';
    return (
        <div className={`${borderOfNoneLastType} ${newCustomRowStyle} flex justify-between pl-4 pr-2`}>
            <dt className={`${newCustomDescStyle} border-r-1 w-[13rem] py-[2px]`}>{description}</dt>
            <dd className="py-[2px]">{Number(amount).toFixed(2)}</dd>
        </div>
    );
}

function Category({ children, type }) {
    return (
        <section className="border-x border-cyan-600 text-cyan-900">
            <h2 className="bg-cyan-600 text-neutral-100 font-semibold py-[1px] pl-2">{type}</h2>
            <dl>
                {children}
                
            </dl>
        </section>
    );
}

function Summary() {
    const customDecsriptionStyle = "border-white text-right pr-4";
    return (
        <section className="border-x border-t border-cyan-600">
            <dl className="text-neutral-100 font-bold">
                <ExpenseRow description="Total" amount="100" customRowStyle="bg-cyan-600" customDescStyle={customDecsriptionStyle} />
                <ExpenseRow description="Available Cash" amount="0" customRowStyle="bg-emerald-500 border-green-500" customDescStyle={customDecsriptionStyle}/>
                <ExpenseRow description="Excess" amount="0" customRowStyle="bg-rose-600 " customDescStyle={customDecsriptionStyle}/>
            </dl>
        </section>
    );
}