import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-[#f7f1ed] py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content with Animation */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#5e4636] leading-tight mb-4">
            Discover Elegant <br /> Hijab Styles
          </h1>
          <p className="text-[#7f5f4c] text-base sm:text-lg mb-6">
            Explore trending hijab looks, read reviews, and share your favorite styles. Your perfect hijab is just a scroll away.
          </p>
          <motion.a
            href="#styles"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#5e4636] hover:bg-[#7f5f4c] text-white px-6 py-3 rounded-full transition"
          >
            Browse Styles
          </motion.a>
        </motion.div>

        {/* Image with Animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src=".\src\assets\images\heroImage.jpeg"
            alt="Hijab style preview"
            className="w-[300px] sm:w-[350px] md:w-[400px] rounded-xl shadow-xl cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
