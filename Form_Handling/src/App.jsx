
import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card';

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    skills: []
  });

  const [listOfData, setlistOfData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setlistOfData((prev) => [...prev, formData]);

    setFormData({
      name: "",
      email: "",
      password: "",
      gender: "",
      skills: []
    });

  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((iteam) => iteam !== value)
      }));
    } else {
      setFormData((prev) => ({
        ...prev, [name]: value
      }));
    }
  }

  useEffect(() => {
    console.log(listOfData);
  }, [listOfData]);
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">

        <form onSubmit={handleSubmit} className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Form Handling
          </h1>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              name='name'
              value={formData.name}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              name='email'
              value={formData.email}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}

            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              name='password'
              value={formData.password}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-50  focus:border-blue-500"
              onChange={handleChange}

            />
          </div>

          {/*Radio Button*/}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Gender
            </label>

            <div className='flex items-center gap-x-4 mb-5'>
              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                  />
                  Male
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />
                  Female
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === "Other"}
                    onChange={handleChange}
                  />
                  Other
                </label>
              </div>
            </div>
          </div>

          {/*CheckBox*/}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Skills
            </label>

            <div className='flex items-center gap-x-4 mb-5'>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="skills"
                    value="HTML"
                    checked={formData.skills.includes("HTML")}
                    onChange={handleChange}
                  />
                  HTML
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="checkbox"
                    name="skills"
                    value="CSS"
                    checked={formData.skills.includes("CSS")}
                    onChange={handleChange}
                  />
                  CSS
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="checkbox"
                    name="skills"
                    value="JavaScript"
                    checked={formData.skills.includes("JavaScript")}
                    onChange={handleChange}
                  />
                  JavaScript
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="checkbox"
                    name="skills"
                    value="React"
                    checked={formData.skills.includes("React")}
                    onChange={handleChange}
                  />
                  React
                </label>
              </div>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>

        </form>
      </div>

      <div>
        {listOfData.map((element, index) => {
          return <Card key={index} data={element} />
        })}
      </div>
    </>
  )
}

export default App

