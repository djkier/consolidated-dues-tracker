import ExpenseRow from "./InputComps";

export function Category({ children, type }) {
    return (
        <section className="border-x border-cyan-600 text-cyan-900">
            <h2 className="bg-cyan-600 text-neutral-100 font-semibold py-[1px] pl-2">{type}</h2>
            <dl>
                {children}
                
            </dl>
        </section>
    );
}

export function Summary({ total, availableCash, handleAvailableCash, difference}) {
    const customDescriptionStyle = "border-white text-right pr-4";
    return (
        <section className="border-x border-t border-cyan-600">
            <dl className="text-neutral-100 font-bold">
                <ExpenseRow description="Total" value={total} readOnly customRowStyle="bg-cyan-600" customDescStyle={customDescriptionStyle}  />
                <ExpenseRow description="Available Cash" value={availableCash} onChange={handleAvailableCash} customRowStyle="bg-emerald-500 border-green-500" customDescStyle={customDescriptionStyle}/>
                <ExpenseRow description="Excess" value={difference} readOnly amount="0" customRowStyle="bg-rose-600 " customDescStyle={customDescriptionStyle}/>
            </dl>
        </section>
    );
}