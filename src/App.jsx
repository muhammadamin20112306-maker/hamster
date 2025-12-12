import React, { useState, useEffect } from 'react'

function App() {
  const [coins, setCoins] = useState(501)
  const [level, setLevel] = useState(1)
  const [energy, setEnergy] = useState(500)
  const [maxEnergy] = useState(500)
  const [earnPerTap] = useState(1)
  const [profitPerHour] = useState(0)
  const [coinsToLevel] = useState(5000)
  const [clickAnimation, setClickAnimation] = useState(false)

  const handleTap = () => {
    if (energy > 0) {
      setCoins(coins + earnPerTap)
      setEnergy(energy - 1)
      setClickAnimation(true)
      setTimeout(() => setClickAnimation(false), 100)
    }
  }

  // Energy regeneration
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy(prev => Math.min(prev + 1, maxEnergy))
    }, 1000)
    return () => clearInterval(interval)
  }, [maxEnergy])

  const progress = (coins / coinsToLevel) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-2">LEVEL UP</h1>
        <p className="text-xl text-center text-gray-300">YOUR HAMSTERS</p>
        
        {/* Stats Bar */}
        <div className="mt-6 bg-gray-800/50 backdrop-blur rounded-2xl p-4 border border-yellow-600/30">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-yellow-600 text-sm mb-1">Earn per tap</p>
              <p className="text-xl font-bold flex items-center justify-center">
                <span className="text-2xl mr-1">🪙</span> +{earnPerTap}
              </p>
            </div>
            <div>
              <p className="text-blue-400 text-sm mb-1">Coins to level up</p>
              <p className="text-xl font-bold">{coinsToLevel}</p>
            </div>
            <div>
              <p className="text-yellow-600 text-sm mb-1">Profit per hour</p>
              <p className="text-xl font-bold flex items-center justify-center">
                <span className="text-2xl mr-1">🪙</span> +{profitPerHour}
              </p> 
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Coin Display */}
        <div className="flex items-center justify-center mb-6">
          <span className="text-6xl mr-3">🪙</span>
          <span className="text-6xl font-bold">{coins}</span>
        </div>

        {/* Level Progress */}
        <div className="w-full max-w-md mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-yellow-600 font-semibold">Bronze</span>
            <span className="text-gray-400">Level {level}/10</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {/* Hamster */}
        <div className="relative mb-8">
          <div className="absolute top-0 right-0 bg-white text-black px-3 py-2 rounded-lg font-bold shadow-lg">
            <span className="text-xl mr-1">🪙</span>
            +10k
          </div>
          <div 
            className={`relative cursor-pointer transition-transform ${clickAnimation ? 'scale-95' : 'scale-100'}`}
            onClick={handleTap}
          >
            <div className="w-80 h-80 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 p-2 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
                <img 
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Hamster.png"
                  alt="Hamster"
                  className="w-64 h-64 select-none"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Energy Bar */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">⚡</span>
          <span className="text-2xl font-bold">{energy} / {maxEnergy}</span>
        </div>

        {/* Boost Button */}
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-xl font-bold text-lg shadow-lg flex items-center gap-2 transition-all">
          <span className="text-2xl">🚀</span>
          Boost
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-gray-800/80 backdrop-blur p-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
            <span className="text-3xl">🏠</span>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
            <span className="text-3xl">⚔️</span>
            <span className="text-xs">Main</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
            <span className="text-3xl">🔗</span>
            <span className="text-xs">Share</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors relative">
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-3xl">💰</span>
            <span className="text-xs">Earn</span>
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600 transition-colors">
            <span className="text-2xl">🪙</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App