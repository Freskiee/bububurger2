import React from 'react';
import { Flame, Beef } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <Beef className="text-primary-500 h-full w-full" />
      </div>
      <div className="absolute -top-2 -right-2">
        <Flame className="text-accent-red h-6 w-6 animate-bounce" />
      </div>
    </div>
  );
};

export default Logo;


// import React from 'react';
// import { Flame, Beef } from 'lucide-react';
// import LogoBubu from '../../assets/images/izettle.png';

// interface LogoProps {
//   className?: string;
// }

// const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
//   return (
//     <div className={`relative ${className}`}>
//       <div className="absolute inset-0 flex items-center justify-center ">
//         <img src={LogoBubu} alt="Logo" className="h-10 w-auto" />
//       </div>
//       <div className="absolute -top-2 -right-12 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
//         <img src={LogoBubu} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Logo;