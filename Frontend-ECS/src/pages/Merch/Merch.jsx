import { useState } from "react"
import Scene from "../../scenes/Scene"
import { FaInstagram } from "react-icons/fa"
import { FiArrowLeft } from "react-icons/fi"



export default function Merch() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  /*
  selectedProduct = {
    id: "tshirt" | "hoodie",
    title: string,
    model: string,
    designer: string,
    gsm: string
  }
  */
  const [showOverlay, setShowOverlay] = useState(true)
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid gap-8 
                      grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        <div 
          onClick={() => {
            setSelectedColorIndex(0) 
            setSelectedProduct({
              id: "ecetshirt",
              title: "ECE Branch TShirt 2025",
              gsm: "240 GSM",
              fit: "Oversized",
              designer: "Ahiron Sharma",
              colors: [
                { name: "Beige", model: "/models/ece_merch.glb" },
                { name: "Black", model: "/models/ece_merch_b.glb" },
              ],
              model: "/models/ece_merch.glb",
              instagram: "https://www.instagram.com/p/DQroetzE44o/",
              bgColor: "#008822"
            })
          }}
          className="bg-neutral-900 rounded-3xl p-6 shadow-xl cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-2xl font-bold mb-4">ECE T-Shirt</h2>
          <div className="aspect-square rounded-2xl overflow-hidden relative">
            <img
              src="/thumbnails/cover_ece.png"
              alt="ECE T-Shirt"
              className="w-full h-full object-cover"
            />

            {/* hover overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center
                        bg-black/40 opacity-0 hover:opacity-100 transition"
            >
              <span className="text-white text-sm font-semibold">
                Click to View
              </span>
            </div>
          </div>

        </div>

        <div 
          onClick={() => { 
            setSelectedProduct({
              id: "ecstshirt",
              title: "ECS TShirt 2025",
              gsm: "240 GSM",
              fit: "Oversized",
              designer: "Ahiron Sharma",
              colors: [
                { name: "Black", model: "/models/ecs_merch.glb" },
              ],
              model: "/models/ecs_merch.glb",
              instagram: "https://www.instagram.com/ecs.nits",
              bgColor: "#8b1b1b"
            })
          }}
          className="bg-neutral-900 rounded-3xl p-6 shadow-xl cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-2xl font-bold mb-4">ECS T-Shirt</h2>
          <div className="aspect-square rounded-2xl overflow-hidden relative">
            <img
              src="/thumbnails/cover_ecs.png"
              alt="ECS T-Shirt"
              className="w-full h-full object-cover"
            />

            {/* hover overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center
                        bg-black/40 opacity-0 hover:opacity-100 transition"
            >
              <span className="text-white text-sm font-semibold">
                Click to View
              </span>
            </div>
          </div>

        </div>

        <div 
          onClick={() => setSelectedProduct({
              id: "hoodie",
              title: "ECE Hoodie 2025",
              gsm: "350 GSM",
              fit: "Regular",
              designer: "Ahiron Sharma",
              colors: [
                { name: "Black", model: "/models/ece_hood.glb" },
              ],
              model: "/models/ece_hood.glb",
              instagram: "https://www.instagram.com/p/DSkhX9Mk41H/",
              bgColor: "#008822"
            })
          }
          className="bg-neutral-900 rounded-3xl p-6 shadow-xl cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-2xl font-bold mb-4">ECE Hoodie</h2>
          <div className="aspect-square rounded-2xl overflow-hidden relative">
            <img
              src="/thumbnails/cover_hood.png"
              alt="ECE Hoodie"
              className="w-full h-full object-cover"
            />

            {/* hover overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center
                        bg-black/40 opacity-0 hover:opacity-100 transition"
            >
              <span className="text-white text-sm font-semibold">
                Click to View
              </span>
            </div>
          </div>
        </div>

      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              width: "90vmin",
              height: "90vmin",
            }}
          >
            {/* 3D Viewer */}
            <Scene  
              key={selectedProduct.id}
              modelPath={
                selectedProduct.colors
                  ? selectedProduct.colors[selectedColorIndex].model
                  : selectedProduct.model
              }
              bgColor={selectedProduct.bgColor}
              
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 60%)",
              }}
            />
            {!showOverlay && (
              <button
                onClick={() => {
                  setShowOverlay(true)
                }}
                className="absolute top-4 right-4 z-50 
                          bg-black/60 text-white 
                          w-10 h-10 rounded-full 
                          flex items-center justify-center
                          hover:bg-black transition
                          pointer-events-auto"
              >
                <FiArrowLeft size={22} />
              </button>
            )}


            {/* Overlay */}
            {showOverlay && (
              <div className="absolute bottom-0 left-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <div className="px-6 pb-6 pt-1 text-white space-y-1">
                  <div className="absolute left-6 bottom-6 max-w-[70%] text-white space-y-3">

                    <h1 className="text-2xl font-bold">
                      {selectedProduct.title}
                    </h1>

                    <div className="text-sm opacity-80 space-y-0.5">
                      <p>{selectedProduct.gsm}</p>
                      <p>{selectedProduct.fit}</p>
                      <p>Designer: {selectedProduct.designer}</p>
                    </div>

                    {selectedProduct.colors && (
                      <div>
                        <p className="text-xs opacity-70 mb-1">Available Colors</p>
                        <div className="flex gap-2 flex-wrap">
                          {selectedProduct.colors.map((c, i) => (
                            <button
                              key={c.name}
                              onClick={() => setSelectedColorIndex(i)}
                              className={`px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition min-w-[72px] w-fit

                                ${
                                  i === selectedColorIndex
                                    ? "bg-white text-black"
                                    : "bg-white/20 text-white"
                                }
                              `}
                            >
                              {c.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <a
                      href={selectedProduct.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition"
                    >
                      <FaInstagram size={20} />
                    </a>
                    </div>
                    <button
                        onClick={() => setShowOverlay(false)}
                        className="
                          absolute right-6 bottom-6
                          bg-white text-black
                          px-5 py-2
                          rounded-full
                          font-semibold
                          hover:scale-105
                          transition
                        "
                      >
                        View 3D
                    </button>

                  </div>

                </div>
              </div>
            )}
          </div>



          <button 
            onClick={() => {
              setSelectedProduct(null)
              setShowOverlay(true)}}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  )
}
