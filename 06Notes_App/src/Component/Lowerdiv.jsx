import React from "react";
import { Trash2, Notebook, Pencil } from 'lucide-react';
import Card from "./Card";

function Lowerdiv({ tasklist }) {
    return (
        <div className=" ">
            <div className="flex gap-2 font-bold text-[18px] items-center ">
                <Notebook /> My Notes
            </div>

            <div className="flex flex-row gap-3.5 flex-wrap items-center justify-center">
                {tasklist.map((task, index) => (
                    <Card key={index} task={task} />
                ))}
            </div>
        </div>
    )
}

export default Lowerdiv