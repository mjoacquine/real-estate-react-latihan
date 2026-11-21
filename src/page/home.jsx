import Features from "../../components/Features";
import Properties from "../../components/Properties";
import Hero from "../../components/Hero";
import CTA from "../../components/CTA";

function Home() {
  // Array untuk data perumahan (bisa diisi dari backend nanti)
  const housingList = [
    {
      id: 1,
      name: "Griya Asri Residence",
      location: "Jakarta Selatan",
      price: 850000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop",
      rating: 4.5,
      status: "Available",
    },
    {
      id: 2,
      name: "Taman Indah Village",
      location: "Tangerang",
      price: 650000000,
      bedrooms: 2,
      bathrooms: 1,
      area: 90,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      rating: 4.8,
      status: "Available",
    },
    {
      id: 3,
      name: "Villa Sejahtera",
      location: "Bogor",
      price: 1200000000,
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      rating: 4.9,
      status: "Available",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Properties Section */}
      <Properties housingList={housingList} />

      {/* CTA Section */}
      <CTA />
    </>
  );
}

export default Home;