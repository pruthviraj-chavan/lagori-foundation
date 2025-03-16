
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

const TeamCard: FC<TeamCardProps> = ({ image, name, role, bio, socialLinks }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-lagori-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4 line-clamp-3">{bio}</p>
        <Link to="/about" className="text-lagori-600 font-medium hover:text-lagori-700 flex items-center">
          Read more <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
