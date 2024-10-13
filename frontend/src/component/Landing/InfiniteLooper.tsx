import { useState, useRef, useCallback, useEffect } from "react";

export default function InfiniteLooper({
  direction,
  children,
}: {
  speed: number;
  direction: "right" | "left";
  children: React.ReactNode;
}) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const setupInstances = useCallback(() => {
    if (!innerRef.current || !outerRef.current) return;

    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const instanceWidth = width / innerRef.current.children.length;

    if (width < parentWidth + instanceWidth) {
      // Le calcul d'instances supplémentaires en fonction de la taille du parent
      const instancesNeeded = Math.ceil(parentWidth / width) + 1;
      setLooperInstances(instancesNeeded);
    }
  }, []);

  useEffect(() => {
    setupInstances();
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [setupInstances]);

  return (
    <div className="looper" ref={outerRef} style={{ overflow: "hidden" }}>
      <div
        className="looper__innerList"
        ref={innerRef}
        style={{
          display: "flex",
          animation: `scroll 10s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {[...Array(looperInstances)].map((_, ind) => (
          <div key={ind} className="looper__listInstance">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
