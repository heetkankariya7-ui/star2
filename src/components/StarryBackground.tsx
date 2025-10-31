import backgroundImg from "@assets/sky image_1761924811792.jpg";

export function StarryBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          animation: 'slowZoom 30s ease-in-out infinite alternate, drift 40s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
          animation: 'pulse 8s ease-in-out infinite',
        }}
      />
      <div className="absolute inset-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite, float ${Math.random() * 20 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes slowZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        @keyframes drift {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(-20px) translateY(10px);
          }
          50% {
            transform: translateX(10px) translateY(-15px);
          }
          75% {
            transform: translateX(15px) translateY(20px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
      `}</style>
    </div>
  );
}
