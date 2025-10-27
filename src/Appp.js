import { useFormStatus } from "react-dom";
import action from './actions';

function Submit() {
    const status = useFormStatus();
    return <button disabled={status.pending}>Submit</button>
}

export default function App() {
    return (
        <form action={action}>
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
            <Submit type="submit">ورود</Submit>
        </form>
    );
}