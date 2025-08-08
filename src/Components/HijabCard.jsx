function HijabCard({ image, title, description }) {
  return (
    <div className="bg-[#e6d3c6] rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h2 className="text-xl font-semibold text-[#94725b]">{title}</h2>
      <p className="text-sm text-[#7f5f4c] mt-1">{description}</p>
    </div>
  )
}

export default HijabCard
