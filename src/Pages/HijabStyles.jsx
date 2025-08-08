// src/Pages/HijabStyles.jsx
import HijabCard from "../Components/HijabCard";

// Dummy hijab data for now
const hijabs = [
  {
    id: 1,
    name: "Classic Black Hijab",
    image: "https://via.placeholder.com/300x200",
    description: "Elegant and timeless black hijab perfect for any occasion.",
    averageRating: 4.5,
  },
  {
    id: 2,
    name: "Pastel Pink Hijab",
    image: "https://via.placeholder.com/300x200",
    description: "Soft pastel pink hijab for a subtle and feminine look.",
    averageRating: 4.2,
  },
];

export default function HijabStyles() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-[#5e4636] mb-6">Hijab Styles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hijabs.map((hijab) => (
          <HijabCard key={hijab.id} hijab={hijab} />
        ))}
      </div>
    </section>
  );
}
