import { useReveal } from "../hooks/useReveal";

const offsets = {
  up: "translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
};

const Reveal = ({
  children,
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className = "",
  ...rest
}) => {
  const [ref, visible] = useReveal();
  const hiddenOffset = offsets[direction] || offsets.up;

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenOffset}`
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
