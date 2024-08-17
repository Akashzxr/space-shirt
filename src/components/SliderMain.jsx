import { faArrowLeft, faArrowRight, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Model from "./Model";

import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  OrbitControls,
  Stage,
} from "@react-three/drei";
import { AmbientLight, PointLight } from "three";

function SliderMain() {
  const ref = useRef();
  return (
    <div className="flex items-center justify-center gap-3 h-96 flex-col sm:flex-row">
      <div className="flex items-center  text-2xl gap-4">
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3 className="font-Cannon">MOON</h3>
      </div>

      <div className="max-w-lg w-full h-full">
        <Canvas dpr={[1, 2]} camera={{ fov: 50 }} >
          <Suspense fallback={null}>\
            <Stage
              controls={ref}
              environment="city"
              shadows={false}

            >
              false
              <Model/>
              false
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} autoRotate enableZoom={false} />
        </Canvas>
      </div>

      <div className="flex items-center  text-2xl gap-4">
        <h3 className="font-Cannon">DESIGN</h3>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
}

export default SliderMain;
