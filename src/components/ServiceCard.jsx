import React from "react";

const ServiceCard = ({ serviceTitle, serviceDesc, serviceIcon }) => {
  const Icon = serviceIcon;
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl backdrop-blur-xl border border-white/10 relative shadow-2xl">
      {/* Icon */}
      <div className="flex items-center justify-center text-2xl w-14 h-14 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 text-white mb-4">
        <Icon size={20} />
      </div>
      <h4 className="text-lg font-semibold tracking-tight mb-4">
        {serviceTitle}
      </h4>
      <p className="text-sm text-[#B3C7D6] leading-[26px] text-left">
        {serviceDesc}
      </p>
    </div>
  );
};

export default ServiceCard;
