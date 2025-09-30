import React from 'react';
import WorldMap from 'react-svg-worldmap';

// داده‌های نمونه (می‌تونید برای هر کشور مقدار بذارید، مثل جمعیت)
const data = [
    { country: 'usa', value: 331002651 }, // ایالات متحده
    { country: 'ir', value: 83992949 },   // ایران
    { country: 'cn', value: 1439323776 }, // چین
    // بیشتر اضافه کنید...
];

function InteractiveWorldMap() {
    return (
        <div style={{ height: '500px', width: '100%' }}>
            <WorldMap
                color="lightblue"        // رنگ پایه کشورها
                hoverColor="red"         // رنگ hover
                borderColor="black"      // رنگ مرزها
                size="responsive"        // اندازه responsive
                data={data}              // داده‌ها برای tooltip
                tooltipTextFunction={(countryName, value, prefix, suffix) => {
                    return `${countryName}: ${value} نفر`; // سفارشی‌سازی tooltip
                }}
            />
        </div>
    );
}

export default InteractiveWorldMap;