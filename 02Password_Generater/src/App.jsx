import React, { useState, useCallback, useEffect, useRef } from 'react'
const App = () => {
  const [length, setlength] = useState(6);
  const [numbers, setnumbers] = useState(false);
  const [symbol, setsymbol] = useState(false);
  const [password, setPassword] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) {
      str += "0123456789";
    }
    if (symbol) {
      str += "!@#$%^&*()-_=+[]{}|;:',.<>/?`~"
    }

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numbers, symbol]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, symbol]);

  const passwordRef = useRef(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(passwordRef.current.value);
    passwordRef.current.focus();
    // Show immediately
    setShowNotification(true);

    // Remove after 2 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          ✓ Password Copied
        </div>
      )}

      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-2xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Password Generator
        </h1>

        {/* Password + Copy */}
        <div className="flex gap-2 mb-6">

          <input
            type="text"
            value={password}
            className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 placeholder-gray-400"
            ref={passwordRef}
            readOnly
          />

          <button
            onClick={handleCopy}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition cursor-pointer"
          >
            Copy
          </button>

        </div>

        {/* Range */}
        <div className="mb-6">

          <div className="flex justify-between items-center mb-3">
            <label className="text-white font-medium">
              Password Length
            </label>

            <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
              {length}
            </span>
          </div>

          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setlength(e.target.value)}
            className="w-full accent-blue-600 cursor-pointer"
          />

        </div>

        {/* Symbols */}
        <div className="flex items-center gap-3 mb-4">

          <input
            type="checkbox"
            id="symbols"
            className="w-5 h-5 accent-blue-600 cursor-pointer"
            onChange={() => setsymbol(!symbol)}
          />

          <label
            htmlFor="symbols"
            className="text-gray-200 cursor-pointer"
          >
            Symbols
          </label>

        </div>

        {/* Alphabet */}
        <div className="flex items-center gap-3">

          <input
            type="checkbox"
            id="alphabet"
            onChange={() => setnumbers(!numbers)}
            className="w-5 h-5 accent-blue-600 cursor-pointer"
          />

          <label
            htmlFor="alphabet"
            className="text-gray-200 cursor-pointer"
          >
            Numbers
          </label>

        </div>

      </div>

    </div>
  )
}

export default App