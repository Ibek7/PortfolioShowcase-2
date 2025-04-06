import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "#11071F",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 10,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: [
              "#FFD700", // Gold
              "#6A0DAD", // Royal purple
              "#800020", // Royal burgundy
              "#E6E6FA", // Lavender (very subtle)
            ],
          },
          links: {
            color: "#FFD700",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.8,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.3
            },
            animation: {
              enable: true,
              speed: 0.3,
              sync: false
            }
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false
            }
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
            polygon: {
              sides: 6
            }
          },
        },
        detectRetina: true,
        themes: [
          {
            name: "royal",
            default: {
              value: true,
              mode: "dark",
            },
            options: {
              background: {
                color: "#11071F"
              },
              particles: {
                color: {
                  value: [
                    "#FFD700", // Gold
                    "#6A0DAD", // Royal purple
                    "#800020", // Royal burgundy
                    "#E6E6FA", // Lavender (very subtle)
                  ]
                }
              }
            }
          }
        ]
      }}
    />
  );
};

export default ParticlesBackground;