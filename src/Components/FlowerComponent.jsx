import React, { useEffect, useRef,useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

const FlowerComponent = () => {
  const containerRef = useRef(null);
  const [isYellow, setIsYellow] = useState(false); // Controls yellow transition
  const [isVisible, setIsVisible] = useState(true); // Controls modal visibility
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 50); // Initial camera position

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 3); // Increased ambient light for overall brightness
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 4.5); // Stronger directional light
    directionalLight.position.set(0, 25, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 4096; // Higher resolution for detailed shadows
    directionalLight.shadow.mapSize.height = 4096;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 100;
    scene.add(directionalLight);
    
    const spotLight = new THREE.SpotLight(0xffff33, 8); // Extremely bright yellow spotlight
    spotLight.position.set(0, 50, 30);
    spotLight.target.position.set(0, 0, 0); // Focused on the flower
    spotLight.angle = Math.PI / 8; // Narrow beam for concentrated light
    spotLight.penumbra = 0.9; // Softer edges
    spotLight.decay = 2; // Natural fall-off of light
    spotLight.distance = 100;
    spotLight.castShadow = true;
    scene.add(spotLight);

    let flowerModel;

    const loader = new GLTFLoader();
    loader.load(
      "/assets/flowers/sun_flowers.glb",
      (gltf) => {
        flowerModel = gltf.scene;
        flowerModel.position.set(2,-1, 30); // Start below the navbar
        flowerModel.rotation.y += 0.01;
        flowerModel.scale.set(3, 3, 3); // Initial size
        scene.add(flowerModel);

      // Material Adjustments
      flowerModel.traverse((child) => {
        if (child.isMesh) {
          child.material.needsUpdate = true;
          child.material.emissive = new THREE.Color(0xffff33); // Vibrant yellow glow
          child.material.emissiveIntensity = 3; // Intense glow effect
          child.material.roughness = 0.1; // Smooth surface for brighter reflections
          child.material.metalness = 0.5; // Increased metallic appearance for realism
          child.material.clearcoat = 0.8; // Adds a polished layer for enhanced highlights
          child.material.clearcoatRoughness = 0.1; // Smooth clearcoat for mirror-like reflections
        }
      });
        

        // Scroll-Based Position Adjustment
        const positions = [
          { x: 2, y: -1, z: 30 }, // Initial position
          { x: 2, y: -3, z: 20 },
          { x: 2, y: -3, z: 10 },
          { x: 2, y: -3, z: -8 }, // Final position
        ];

        const handleScroll = () => {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        
        // Reverse the progress so scrolling down moves toward the sun
        const progress = Math.min(scrollY / maxScroll, 1);
        
        const segmentCount = positions.length - 1;
        const currentIndex = Math.floor(progress * segmentCount);
        const nextIndex = Math.min(currentIndex + 1, segmentCount);
        const segmentProgress =
          (progress * segmentCount) - currentIndex;
        
        const currentPos = positions[currentIndex];
        const nextPos = positions[nextIndex];
        
        // Ensure the model zooms in (toward the sun) as you scroll down
        flowerModel.position.lerpVectors(
          new THREE.Vector3(currentPos.x, currentPos.y, currentPos.z),
          new THREE.Vector3(nextPos.x, nextPos.y, nextPos.z),
          segmentProgress
        );
        
        // Adjust camera zoom or scale if needed for a more dramatic zoom-in effect
        flowerModel.scale.lerpVectors(
          new THREE.Vector3(3, 3, 3), // Initial scale
          new THREE.Vector3(45, 45, 45), // Final scale (closer to sun)
          progress
        );

        // Manage transitions
        if (progress >= 0.95) {
          setIsVisible(false); // Hide the flower
          setIsYellow(true); // Transition to yellow screen
          setTimeout(() => {
            setIsYellow(false); // Notify Home component
            onTransitionComplete(); // Notify Home component
          }, 1000); // Delay for yellow screen
        }  
        else if (progress <= 0.1) {
            setIsYellow(false); // Reset yellow background
            setIsVisible(true); // Show modal again
          }
        };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );

    // Animation loop for clockwise rotation
    const animate = () => {
      if (isVisible) {
        renderer.render(scene, camera);
      }
      requestAnimationFrame(animate);
      };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      // containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="motion-translate-x-in-100 motion-duration-[2s] motion-ease-spring-smooth" id="container3D" ref={containerRef}
    style={{
      opacity: isVisible ? 1 : 0, // Smooth fade-out for modal
      visibility: isVisible ? "visible" : "hidden", // Hide modal
      backgroundColor: isYellow ? "#FFD700" : "transparent", // Yellow transition
      transition: "opacity 1s ease, visibility 1s ease, background-color 1s ease",
    }}
    />
  );
};

export default FlowerComponent;

