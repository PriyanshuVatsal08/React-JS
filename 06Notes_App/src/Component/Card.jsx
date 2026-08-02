import { Pencil, Trash2 } from "lucide-react";
function Card({ task }) {
    return (
        <div className="bg-[#E3E8F8] w-3/10 p-3 rounded-2xl mt-10">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{task.title}</h1>

                <div className="flex gap-3">
                    <button>
                        <Pencil size={20} />
                    </button>

                    <button>
                        <Trash2 size={20} />
                    </button>
                </div>
            </div>

            <p className="text-sm mt-2">{task.detail}</p>
        </div>
    );
}

export default Card