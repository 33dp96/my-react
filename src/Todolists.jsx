import { useState } from "react";
import BaseFrame from "../theme/BaseFrame";

export default function TodoLists() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todoes, setTodoes] = useState([
        {
            id: 1,
            title: "تماشای فیلم",
            description: "فیلم ارباب حلقه ها",
        },
        {
            id: 2,
            title: "تمرین ری اکت",
            description: "مرور جلسات گذشته",
        },
    ]);

    const [editingId, setEditingId] = useState < number | null > (null);

    
    function save(event: React.FormEvent) {
        event.preventDefault();

        if (!title.trim() || !description.trim()) return;

        if (editingId !== null) {
            // حالت ویرایش
            setTodoes(
                todoes.map((item) =>
                    item.id === editingId ? { ...item, title, description } : item
                )
            );
            setEditingId(null);
        } else {
            // حالت ایجاد جدید
            const newTodo = {
                id: Date.now(), // یا Math.max(...todoes.map(t => t.id)) + 1
                title,
                description,
            };
            setTodoes([...todoes, newTodo]);
        }

        // پاک کردن فرم
        setTitle("");
        setDescription("");
    }

    // شروع ویرایش
    function startEdit(id: number) {
        const todo = todoes.find((t) => t.id === id);
        if (todo) {
            setTitle(todo.title);
            setDescription(todo.description);
            setEditingId(id);
        }
    }

    // حذف وظیفه
    function remove(id: number) {
        setTodoes(todoes.filter((t) => t.id !== id));
    }

    // لغو ویرایش
    function cancelEdit() {
        setEditingId(null);
        setTitle("");
        setDescription("");
    }

    return (
        <BaseFrame>
            <div className="max-w-2xl mx-auto p-6 space-y-8">
                <h1 className="text-2xl font-bold text-center">مدیریت وظایف</h1>

                {/* فرم ایجاد/ویرایش */}
                <form onSubmit={save} className="bg-white p-6 rounded-lg shadow space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">عنوان وظیفه</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="عنوان..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">توضیح وظیفه</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="توضیحات..."
                        />
                    </div>

                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            {editingId !== null ? "به‌روزرسانی" : "ثبت"}
                        </button>
                        {editingId !== null && (
                            <button
                                type="button"
                                onClick={cancelEdit}
                                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                            >
                                لغو
                            </button>
                        )}
                    </div>
                </form>

                {/* لیست وظایف */}
                <div className="space-y-3">
                    {todoes.length === 0 ? (
                        <p className="text-center text-gray-500">هیچ وظیفه‌ای ثبت نشده است.</p>
                    ) : (
                        todoes.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-4 rounded-lg shadow flex justify-between items-start gap-4"
                            >
                                <div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => startEdit(item.id)}
                                        className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                                    >
                                        ویرایش
                                    </button>
                                    <button
                                        onClick={() => remove(item.id)}
                                        className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                                    >
                                        حذف
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </BaseFrame>
    );
}