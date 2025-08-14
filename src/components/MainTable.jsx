const CATEGORY_AND_ITEMS = {
    "House Expense": ["Meralco Main", "Meralco Apartment", "Maynilad Main", "Converge (Internet)"],
    "Clinic": ["Meralco", "Maynilad", "S2S Internet"],
    "Tax": ["2551M", "0619e", "1701q", "Others"],
    "Contributions": ["SSS", "PhilHealth", "PagIBIG"]
}



export default function MainTable() {
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
    const newCustomDescStyle = customDescStyle ? customDescStyle : `border-rose-300`;
    const newCustomRowStyle = customRowStyle ? customRowStyle : '';
    const borderOfNoneLastType = !lastOfType ? `border-b border-rose-300` : '';
    return (
        <div className={`${borderOfNoneLastType} ${newCustomRowStyle} flex justify-between pl-4 pr-2 `}>
            <dt className={`${newCustomDescStyle} border-r-1 w-[13rem] py-[2px]`}>{description}</dt>
            <dd className="py-[2px]">{Number(amount).toFixed(2)}</dd>
        </div>
    );
}

function Category({ children, type }) {
    return (
        <section className="border-x border-rose-300">
            <h2 className="bg-rose-300 text-rose-900 p-1">{type}</h2>
            <dl>
                {children}
                
            </dl>
        </section>
    );
}

function Summary() {
    const customDecsriptionStyle = "border-white text-right pr-4";
    return (
        <section className="border-x border-t border-rose-300">
            <dl className="text-white font-bold">
                <ExpenseRow description="Total" amount="100" customRowStyle="bg-rose-300" customDescStyle={customDecsriptionStyle} />
                <ExpenseRow description="Available Cash" amount="0" customRowStyle="bg-green-500" customDescStyle={customDecsriptionStyle}/>
                <ExpenseRow description="Excess" amount="0" customRowStyle="bg-red-400" customDescStyle={customDecsriptionStyle}/>
            </dl>
        </section>
    );
}