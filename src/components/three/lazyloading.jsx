import { lazy, Suspense, useRef, useState, useEffect } from "react";

const SceneCanvas = lazy(() => import("./SceneCanvas.jsx"));

function Lazyloading() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect(); // load once
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {show && (
        <Suspense fallback={null}>
          <SceneCanvas />
        </Suspense>
      )}
    </div>
  );
}

export default Lazyloading;