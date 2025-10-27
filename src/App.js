import { useFormStatus } from "react-dom";
import React, { useState } from 'react';

export default function LoginForm() {
    // تعریف state برای هر فیلد
    const [username, setUsername] = useState(''); // مقدار اولیه خالی
    const [password, setPassword] = useState('');

    // تابع مدیریت ارسال فرم
    const handleSubmit = (event) => {
        event.preventDefault(); // جلوگیری از رفرش صفحه
        console.log('نام کاربری:', username);
        console.log('رمز عبور:', password);
        // اینجا می‌توانید داده‌ها را به سرور ارسال کنید
    };

    return (
        <fieldset>
            <form onSubmit={handleSubmit}>
                <label>
                    نام کاربری:
                    <input
                        type="text"
                        value={username} // اتصال به state
                        onChange={(e) => setUsername(e.target.value)} // به‌روزرسانی state
                    />
                </label>
                <br />
                <label>
                    رمز عبور:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">ورود</button>
            </form>
        </fieldset>
    );
}



