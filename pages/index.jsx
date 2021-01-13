import { motion } from "framer-motion";

export default function Home() {
  const logoArray = [
    "/paving.png",
    "/period.png",
    "/concrete.png",
    "/period.png",
    "/sealcoat.png",
    "/period.png",
    "/ADA.png",
  ];

  const subLineVariants = {
    mounted: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5,
      },
    },
  };

  const imageVariants = {
    unmounted: {
      opacity: 0,
    },
    mounted: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="home-background"
    >
      <div className="mainLogo">
        <motion.div
          initial={{ opacity: 0.2, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="logoMainLine"
        >
          <img width="370px" src="/companyName.png" />
        </motion.div>
        <motion.div
          variants={subLineVariants}
          initial="unmounted"
          animate="mounted"
          className="logoSubLine"
        >
          {logoArray.map((logo, index) => {
            return (
              <motion.img
                variants={imageVariants}
                height={logo === "/period.png" ? "10px" : "35px"}
                key={index}
                src={logo}
              />
            );
          })}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3 }}
        className="mouse-scroll"
      >
        <span>.</span>
      </motion.div>
    </motion.main>
  );
}
