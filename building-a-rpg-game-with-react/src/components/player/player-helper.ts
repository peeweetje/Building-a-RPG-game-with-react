import { useEffect, useState } from 'react';

export default function useKeyPress(fn: any) {
  useEffect(() => {
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [fn]);
}

export function useWalk(maxSteps: number) {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const directions: Record<string, number> = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  const stepSize: number = 16;

  // Hashtable
  const spriteWalking: Record<string, { x: number; y: number }> = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  };

  function walk(dir: number) {
    setDir((prev: number) => {
      if (directions[dir] === prev) move(dir);
      return directions[dir];
    });

    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  }

  function move(dir: number) {
    setPosition((prev) => ({
      x: prev.x + spriteWalking[dir].x,
      y: prev.y + spriteWalking[dir].y,
    }));
  }

  return {
    walk,
    dir,
    step,
    position,
  };
}
