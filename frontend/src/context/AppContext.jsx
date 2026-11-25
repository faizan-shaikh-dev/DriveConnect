"use client";

import { createContext, useContext, useState, useEffect } from "react";

const initialDrivers = [
  {
    id: "arjun",
    name: "Arjun Mehta",
    city: "Mumbai",
    car: "Toyota Camry",
    phone: "919876543211",
    avatar: "/images/driver-arjun.jpg",
    rate: 450,
    rating: 4.9,
    trips: 1240,
    transmission: "Automatic & Manual",
    experience: "7 years",
    status: "available", // "available" | "busy"
    approved: true,
    feePaid: true,
    bio: "Executive corporate chauffeur with 7+ years of accident-free driving in Mumbai traffic. Certified in luxury sedans and EVs.",
    reviews: [
      { author: "Karan S.", rating: 5, comment: "Punctual, smooth driving, very polite." },
      { author: "Rohan D.", rating: 5, comment: "Handled South Mumbai traffic effortlessly." }
    ]
  },
  {
    id: "priya",
    name: "Priya Nair",
    city: "Bengaluru",
    car: "Honda City",
    phone: "919876543212",
    avatar: "/images/driver-priya.jpg",
    rate: 400,
    rating: 4.8,
    trips: 980,
    transmission: "Automatic & EV",
    experience: "5 years",
    status: "available",
    approved: true,
    feePaid: true,
    bio: "Tech-park and airport specialist in Bengaluru. Courteous, calm, and navigation expert.",
    reviews: [
      { author: "Divya N.", rating: 5, comment: "Great trip to Bangalore airport during peak rain." }
    ]
  },
  {
    id: "rahul",
    name: "Rahul Verma",
    city: "Delhi",
    car: "Hyundai Verna",
    phone: "919876543213",
    avatar: "/images/driver-rahul.jpg",
    rate: 420,
    rating: 4.9,
    trips: 1530,
    transmission: "Manual & Automatic",
    experience: "8 years",
    status: "available",
    approved: true,
    feePaid: true,
    bio: "Highway, expressway, and outstation specialist with over 1,500 completed trips across Delhi NCR.",
    reviews: [
      { author: "Aman G.", rating: 5, comment: "Smooth highway trip to Jaipur. Highly recommended!" }
    ]
  },
  {
    id: "sana",
    name: "Sana Khan",
    city: "Hyderabad",
    car: "Skoda Slavia",
    phone: "919876543214",
    avatar: "/images/driver-sana.jpg",
    rate: 380,
    rating: 4.7,
    trips: 760,
    transmission: "Automatic",
    experience: "4 years",
    status: "available",
    approved: true,
    feePaid: true,
    bio: "Reliable city driver specializing in office commutes, shopping runs, and family airport transfers.",
    reviews: [
      { author: "Aditya P.", rating: 5, comment: "On time and safe driving." }
    ]
  },
  {
    id: "vikram",
    name: "Vikram Rao",
    city: "Pune",
    car: "Kia Seltos",
    phone: "919876543215",
    avatar: "/images/driver-vikram.jpg",
    rate: 430,
    rating: 4.8,
    trips: 1100,
    transmission: "Manual & SUV",
    experience: "6 years",
    status: "busy", // Marked Busy / On Trip
    approved: true,
    feePaid: true,
    bio: "SUV & Ghats specialist. Experienced in manual transmission mountain driving and Mumbai-Pune expressway.",
    reviews: [
      { author: "Sameer K.", rating: 5, comment: "Master of clutch control on hills." }
    ]
  },
  {
    id: "neha",
    name: "Neha Joshi",
    city: "Chennai",
    car: "Maruti Ciaz",
    phone: "919876543216",
    avatar: "/images/driver-neha.jpg",
    rate: 360,
    rating: 4.9,
    trips: 890,
    transmission: "Automatic",
    experience: "6 years",
    status: "available",
    approved: true,
    feePaid: true,
    bio: "Calm and patient driver. Highly rated by families and senior citizens for city transit.",
    reviews: [
      { author: "Venkatesh R.", rating: 5, comment: "Very polite and helpful with my parents." }
    ]
  }
];

const initialPendingApplicants = [
  {
    id: "DRV-NEW-101",
    name: "Manish Sharma",
    city: "Jaipur",
    car: "Toyota Innova",
    phone: "919876543220",
    experience: "7 years",
    transmission: "Manual & Automatic",
    license: "RJ-1420210084",
    rate: 410,
    approved: false,
    feePaid: false,
  },
  {
    id: "DRV-NEW-102",
    name: "Suresh Patil",
    city: "Nagpur",
    car: "Mahindra XUV700",
    phone: "919876543221",
    experience: "9 years",
    transmission: "Manual, SUV & Automatic",
    license: "MH-3120190042",
    rate: 440,
    approved: false,
    feePaid: false,
  }
];

const AppContext = createContext();

export function AppProvider({ children }) {
  const [drivers, setDrivers] = useState(initialDrivers);
  const [pendingApplicants, setPendingApplicants] = useState(initialPendingApplicants);
  const [activeDriverId, setActiveDriverId] = useState("arjun"); // Default active driver view
  const [notification, setNotification] = useState(null); // In-app notification toast

  // Current active trip for logged-in driver
  const [activeRide, setActiveRide] = useState({
    id: "BK-1084",
    customer: "Ravi S.",
    customerPhone: "919820012345",
    pickup: "Andheri West, Mumbai",
    destination: "Bandra Kurla Complex (BKC)",
    time: "10:00 AM",
    duration: "4 hours",
    car: "Honda City (Automatic)",
    fare: 1800,
    status: "accepted", // "pending" | "accepted" | "on_trip" | "completed"
  });

  const showNotification = (msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 4000);
  };

  // 1. Sort Drivers by Rating & Trip count (Highest rated appears on top)
  const sortedDrivers = [...drivers].sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return b.trips - a.trips;
  });

  // 2. Driver starts trip -> mark Driver BUSY (so other users see "Busy / On Trip")
  const startTrip = () => {
    setDrivers((prev) =>
      prev.map((d) => (d.id === activeDriverId ? { ...d, status: "busy" } : d))
    );
    setActiveRide((prev) => ({ ...prev, status: "on_trip" }));
    showNotification("Trip Started! Your profile is now marked BUSY to other users.", "info");
  };

  // 3. Driver finishes trip -> mark Driver AVAILABLE
  const finishTrip = () => {
    setDrivers((prev) =>
      prev.map((d) =>
        d.id === activeDriverId
          ? { ...d, status: "available", trips: d.trips + 1 }
          : d
      )
    );
    setActiveRide((prev) => ({ ...prev, status: "completed" }));
    showNotification("Trip Finished! Your profile is now AVAILABLE for new rides.", "success");
  };

  // 4. Rate Driver -> recalculates rating & re-ranks driver list
  const submitDriverReview = (driverId, newRating, comment, clientName = "Customer") => {
    setDrivers((prev) =>
      prev.map((d) => {
        if (d.id === driverId) {
          const totalRatingPoints = d.rating * d.trips + newRating;
          const newTripCount = d.trips + 1;
          const updatedRating = parseFloat((totalRatingPoints / newTripCount).toFixed(1));
          return {
            ...d,
            rating: updatedRating,
            trips: newTripCount,
            reviews: [{ author: clientName, rating: newRating, comment }, ...d.reviews]
          };
        }
        return d;
      })
    );
    showNotification("Thank you! Review submitted and driver ranking updated.", "success");
  };

  // 5. Admin Approves Driver
  const approveDriverKYC = (applicantId) => {
    const applicant = pendingApplicants.find((p) => p.id === applicantId);
    if (!applicant) return;

    setPendingApplicants((prev) => prev.filter((p) => p.id !== applicantId));
    setDrivers((prev) => [
      ...prev,
      {
        ...applicant,
        status: "available",
        approved: true,
        feePaid: true, // Activated upon admin confirmation
        rating: 5.0,
        trips: 0,
        bio: `Certified professional chauffeur in ${applicant.city} with ${applicant.experience} experience.`,
        reviews: []
      }
    ]);
    showNotification(`Driver ${applicant.name} approved and platform fee confirmed (₹499)!`, "success");
  };

  // 6. Driver registration submission
  const registerNewDriver = (newDriverData) => {
    const newApplicant = {
      id: `DRV-NEW-${Date.now().toString().slice(-4)}`,
      name: newDriverData.name,
      city: newDriverData.city || "Mumbai",
      car: newDriverData.car || "Sedan / SUV",
      phone: newDriverData.phone,
      experience: newDriverData.experience || "5 years",
      transmission: newDriverData.transmission || "Automatic",
      license: newDriverData.license || "IN-DL-982104",
      rate: parseInt(newDriverData.rate) || 400,
      approved: false,
      feePaid: false,
    };
    setPendingApplicants((prev) => [newApplicant, ...prev]);
    showNotification("Application submitted! Admin approval & ₹499 fee verification in progress.", "info");
    return newApplicant;
  };

  const currentDriver = drivers.find((d) => d.id === activeDriverId) || drivers[0];

  return (
    <AppContext.Provider
      value={{
        drivers: sortedDrivers,
        sortedDrivers,
        allDrivers: drivers,
        pendingApplicants,
        activeDriver: currentDriver,
        activeDriverId,
        setActiveDriverId,
        activeRide,
        startTrip,
        finishTrip,
        submitDriverReview,
        approveDriverKYC,
        registerNewDriver,
        notification,
        showNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    return {
      drivers: initialDrivers,
      sortedDrivers: initialDrivers,
      allDrivers: initialDrivers,
      pendingApplicants: initialPendingApplicants,
      activeDriver: initialDrivers[0],
      activeDriverId: "arjun",
      setActiveDriverId: () => {},
      activeRide: {},
      startTrip: () => {},
      finishTrip: () => {},
      submitDriverReview: () => {},
      approveDriverKYC: () => {},
      registerNewDriver: () => {},
      notification: null,
      showNotification: () => {},
    };
  }
  return context;
}
