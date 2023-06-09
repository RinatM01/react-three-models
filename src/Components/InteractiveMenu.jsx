import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
	Environment,
	PerspectiveCamera,
	PresentationControls,
	ContactShadows,
	Html,
	useFBX
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const SpaceShip = () => {
	const fbx = useFBX('/assets/Spaceship.fbx');
	return <primitive object={fbx} scale={0.2} rotation={[ 2.2, -0.3, 0 ]} />;
};

const Menu = (props) => {
	const ref = useRef();

	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
		ref.current.rotation.y = Math.sin(t / 4) / 8;
		ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
		ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
	});
	return (
		<group ref={ref} {...props} dispose={null}>
			<SpaceShip />
			<EffectComposer>
				<Bloom
					luminanceThreshold={0}
					luminanceSmoothing={0.9}
					height={100}
				/>
			</EffectComposer>
		</group>
	);
};

const InteractiveMenu = () => {
	return (
		<div className=" mt-20 h-[65vh] md:mt-0 md:w-full md:h-full">
			<Canvas
				shadows
				dpr={[ 1, 2 ]}
				camera={{ position: [ 0, 0, 4 ], fov: 70 }}
			>
				<PerspectiveCamera
					makeDefault
					fov={70}
					position={[ 0, 0, 5 ]}
					focusDistnace={[ 0, 0 ]}
				/>
				<ambientLight color="#ff0a65" intensity={0.5} />
				<spotLight
					position={[ 10, 10, 10 ]}
					angle={0.15}
					penumbra={1}
					shadow-mapSize={[ 512, 512 ]}
					castShadow
				/>
				<Menu />
				<Environment preset="city" />
			</Canvas>
		</div>
	);
};

export default InteractiveMenu;
