import { useRef, useEffect } from "react"

export const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    dimensions.current.width = ref.current?.offsetWidth
    dimensions.current.height = ref.current?.offsetHeight
  }, [])

  return dimensions.current
}
// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.


// export const useDimensions = ref => {
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useLayoutEffect(() => {
//     const updateDimensions = () => {
//       if (ref.current) {
//         setDimensions({
//           width: ref.current.offsetWidth,
//           height: ref.current.offsetHeight
//         });
//       }
//     };

//     updateDimensions();

//     const handleResize = () => {
//       requestAnimationFrame(updateDimensions);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [ref]);

//   return dimensions;
// };
