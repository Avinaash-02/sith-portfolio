import { motion } from "framer-motion";

function GradientMarqueeText({
  text = "Gradient Marquee Text",
  gradientColors = ["#FFA500", "#FF004F", "#00FFDD"],
}: {
  text?: string;
  gradientColors?: string[];
}) {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <motion.div
        className="text-1000xl font-bold whitespace-nowrap"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{

            fontWeight:800,
            fontSize:"38px",
          backgroundImage: `linear-gradient(90deg, ${gradientColors.join(", ")})`,
          backgroundSize: "200% 100%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {text}
      </motion.div>

    </div>
  );
}

export default GradientMarqueeText;
