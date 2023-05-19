import React from "react";
import ServiceCard from "./ServiceCard";
import { BsBrush, BsHeart, BsArrowsAngleExpand, BsGear } from "react-icons/bs";

const Services = () => {
  const servicesDetails = [
    {
      id: 1,
      title: "Web Design and Development",
      desc: "Crafting visually stunning and functional websites tailored to your unique needs.",
      icon: BsBrush,
    },
    {
      id: 2,
      title: "User Experience Optimization",
      desc: "Enhancing user experiences through intuitive interfaces and seamless navigation.",
      icon: BsHeart,
    },
    {
      id: 3,
      title: "Responsive and Mobile First Design",
      desc: "Creating websites that adapt seamlessly across devices, prioritizing mobile users.",
      icon: BsArrowsAngleExpand,
    },
    {
      id: 4,
      title: "Website Maintenance and Support",
      desc: "Reliable website maintenance and support for an enhanced user experience.",
      icon: BsGear,
    },
  ];

  return (
    <div className="w-full px-5 md:px-10 pb-40">
      <h3 className="title">Services</h3>
      {/* Services Container */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 relative">
        {servicesDetails.map((service) => (
          <ServiceCard
            key={service.id}
            serviceTitle={service.title}
            serviceDesc={service.desc}
            serviceIcon={service.icon}
          />
        ))}
        <div className="bg-teal-400/40 w-20 h-20 rounded-full absolute left-0 top-0 z-[-1]"></div>
        <div className="bg-teal-400/40 w-20 h-20 rounded-full absolute right-0 bottom-0 z-[-1]"></div>
      </div>
    </div>
  );
};

export default Services;
