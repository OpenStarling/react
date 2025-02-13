import { useEffect, useRef } from "react";

const Welcome = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) {
          this.speedX *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY *= -1;
        }
      }

      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function initParticles() {
      particlesArray = [];
      for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0E1117",
        color: "white",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      
      <div style={{ maxWidth: "600px", padding: "20px", textAlign: "center", zIndex: 1 }}>
        <h1 style={{ fontSize: "50px", fontWeight: "bold", marginBottom: "20px" }}>
          Добро пожаловать!
        </h1>
        <p style={{ fontSize: "22px", margin: "10px 0 30px", color: "#bbb" }}>
          Визуализация расчётов трёхфазного сепаратора.
        </p>
        <a
          href="http://localhost:8501"
          style={{
            padding: "18px 36px",
            fontSize: "22px",
            background: "#FF4B4B",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            textDecoration: "none",
            transition: "0.3s ease-in-out",
            boxShadow: "0px 4px 8px rgba(255, 75, 75, 0.3)",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#E03E3E";
            e.target.style.transform = "scale(1.08)";
            e.target.style.boxShadow = "0px 8px 15px rgba(255, 75, 75, 0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#FF4B4B";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0px 4px 8px rgba(255, 75, 75, 0.3)";
          }}
        >
          Перейти к расчётам
        </a>
      </div>

      <div style={{ position: "absolute", bottom: "-20px", right: "-20px", zIndex: 1 }}>
        <img
          src="https://i.postimg.cc/Jh3FF92W/Picsart-25-01-30-21-11-00-250.png"
          alt="Фото"
          style={{ width: "450px" }}
        />
      </div>
    </div>
  );
};

export default Welcome;
