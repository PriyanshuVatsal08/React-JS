import React from 'react'

const Card = ({ data }) => {
    return (
        <div className="w-full max-w-sm mx-auto mt-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

            {/* Card Header */}
            <div className="bg-blue-600 px-6 py-5">
                <h2 className="text-2xl font-bold text-white">
                    User Details
                </h2>
                <p className="text-blue-100 text-sm mt-1">
                    User Information
                </p>
            </div>

            {/* Card Body */}
            <div className="p-6">

                {/* Name */}
                <div className="mb-4">
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="text-lg font-semibold text-gray-800">
                        {data.name}
                    </p>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800">
                        {data.email}
                    </p>
                </div>

                {/* Password */}
                <div className="mb-4">
                    <p className="text-sm text-gray-500">Password</p>
                    <p className="text-gray-800">
                        {data.password}
                    </p>
                </div>

                {/* Gender */}
                <div className="mb-4">
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="text-gray-800 font-medium">
                        {data.gender}
                    </p>
                </div>

                {/* Skills */}
                <div>
                    <p className="text-sm text-gray-500 mb-2">
                        Skills
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill) => (
                            <span
                                key={skill}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card