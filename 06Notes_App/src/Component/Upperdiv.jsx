import React from "react";
import { Plus } from 'lucide-react';
import { useState } from "react";
import Lowerdiv from "./Lowerdiv";

function Upperdiv() {
    const [current, setCurrent] = useState({
        title: "",
        detail: ""
    });

    const [tasklist, setTasklist] = useState([]);

    const handleForm = (e) => {
        e.preventDefault();

        setTasklist((prev) => [...prev, current]);

        setCurrent({
            title: "",
            detail: ""
        })
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCurrent((prev) => ({
            ...prev,
            [name]: value,
        }))
    };

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="bg-white w-4/5 h-fit px-6 py-5 rounded-2xl mt-10 relative">
                    <div>
                        <h1 className="text-4xl font-bold text-center">Add a Note</h1>
                    </div>
                    <form className="flex flex-col gap-3.5 mt-4">
                        <input
                            type="text"
                            placeholder="Title"
                            className="text-xl p-2"
                            name="title"
                            value={current.title}
                            onChange={handleChange}
                        />
                        <textarea
                            placeholder="Take a note..."
                            className="text-sm p-2"
                            name="detail"
                            value={current.detail}
                            onChange={handleChange}
                        >
                        </textarea>
                    </form>
                    <div className="ml-230 mt-8">
                        <button className="bg-[#E3E8F8] rounded-3xl p-2 cursor-pointer hover:bg-[#b0bbdf]" onClick={handleForm}><Plus /></button>
                    </div>
                </div>

                <div className="bg-white w-4/5 h-fit px-6 py-5 rounded-2xl mt-10">
                    <Lowerdiv tasklist={tasklist} />
                </div>
            </div>

        </>
    )
}

export default Upperdiv