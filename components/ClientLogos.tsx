const ClientLogos: React.FC = () => {
  // Using placeholders for logos
  const logos = ['IPSUM', 'N', 'O', 'CCC', 'logotype', 'LOGO IPSUM', 'logotype'];

  return (
    <div className="py-12 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-around gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="text-2xl font-bold text-white opacity-70 hover:opacity-100 transition-opacity">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;