function InputComponent({ value, onChange, readOnly }) {
    const handleZero = (e) => {
        if (e.target.value == 0) {
            e.target.select();
        }
    }
    return (
        <input value={value} onChange={onChange}  type="number" onFocus={handleZero} className="w-[6rem] text-right focus:outline-none" readOnly={readOnly} />
    );
}

export default function ExpenseRow({ description, lastOfType, customRowStyle, customDescStyle, value, onChange, readOnly }) {
    const newCustomDescStyle = customDescStyle ? customDescStyle : `<border-cyan-600></border-cyan-600>`;
    const newCustomRowStyle = customRowStyle ? customRowStyle : '';
    const borderOfNoneLastType = !lastOfType ? `border-b border-cyan-600` : '';
    return (
        <div className={`${borderOfNoneLastType} ${newCustomRowStyle} flex justify-between px-4`}>
            <dt className={`${newCustomDescStyle} border-r-1 w-[13rem] py-[2px]`}>{description}</dt>
            <dd className="py-[2px]">
                <InputComponent value={value} onChange={onChange} readOnly={readOnly}/>
            </dd>
        </div>
    );
}