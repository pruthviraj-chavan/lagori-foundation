
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="card hover-lift p-6 h-full flex flex-col items-center text-center">
      <div className="mb-4 text-lagori-600 bg-lagori-100 p-4 rounded-full">
        {icon}
      </div>
      <h3 className="font-playfair text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
