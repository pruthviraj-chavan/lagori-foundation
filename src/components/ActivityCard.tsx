
import { useState } from "react";
import { Calendar } from "lucide-react";

interface ActivityCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  link: string;
}

const ActivityCard = ({ image, title, date, description, link }: ActivityCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="card overflow-hidden h-full flex flex-col">
      <div className="relative h-60 overflow-hidden">
        <div className={`absolute inset-0 bg-gray-200 ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}></div>
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-3 text-sm text-lagori-600">
          <Calendar size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="font-playfair text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="self-start text-lagori-600 font-medium hover:text-lagori-700 transition-colors">
{/*         <button className="self-start text-lagori-600 font-medium hover:text-lagori-700 transition-colors"> */}
          Read more →
{/*         </button> */}
        </a>  
      </div>
    </div>
  );
};

export default ActivityCard;
