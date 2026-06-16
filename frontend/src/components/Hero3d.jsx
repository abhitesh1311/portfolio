import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

function FloatingCube() {
  return (
    <Float
      speed={2}
      rotationIntensity={2}
      floatIntensity={3}
    >
      <mesh rotation={[0.4, 0.6, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#06b6d4"
          metalness={1}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 blur-[150px] opacity-20" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-8">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <p className="text-cyan-400 text-xl mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Abhitesh Kumar
          </h1>

          <h2 className="text-2xl md:text-4xl text-gray-300 mb-6">
            MERN Stack Developer
          </h2>

          <p className="text-gray-400 max-w-xl leading-8">
            I build modern, responsive and scalable web
            applications using MongoDB, Express.js,
            React.js and Node.js.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="px-8 py-3 rounded-full bg-cyan-500 text-black font-bold hover:scale-105 transition">
              View Projects
            </button>

            <button className="px-8 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right 3D Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 h-[500px]"
        >
          <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={2} />

            <directionalLight
              position={[3, 3, 3]}
              intensity={2}
            />

            <FloatingCube />

            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={3}
            />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}