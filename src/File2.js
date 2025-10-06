import React, { useState } from "react";
import moment from "moment-jalaali";

const App = () => {
    const [date, setDate] = useState(moment().format("jYYYY/jMM/jDD"));

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    return (
        <div style={{ direction: "rtl" }}>
            <h1>تقویم با jalali-moment</h1>
            <input
                type="text"
                value={date}
                onChange={handleDateChange}
                placeholder="YYYY/MM/DD"
            />
            <p>تاریخ: {date}</p>
        </div>
    );
};

export default App;