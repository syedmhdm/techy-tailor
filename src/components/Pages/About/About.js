import testimonialData from "../../UI/Testimonial/testimonialData.json";
import Testimonial from "../../UI/Testimonial/Testimonial";
import styles from "./About.module.css";
import machineImg from "../../../assets/machine.png";

const About = () => {
  return (
    <div className={styles.about}>
      <h4 className={styles.historyHeading}>History</h4>
      <div className={styles.historyDiv}>
        <div className={styles.imgDiv}>
          <img
            className={styles.abtImg}
            src={machineImg}
            alt='sewing machine'
          />
        </div>
        <div className={styles.paraDiv}>
          <p>
            Professional, responsive, and able to keep up with ever-changing
            demand and tight deadlines: That's how I would describe Jeramy and
            his team at The Lorem Ipsum Company. Professional, responsive, and
            able to keep up with ever-changing demand and tight deadlines:
            That's how I would describe Jeramy and his team at The Modiste's
            Stitch Company. Professional, responsive, and able to keep up with
            ever-changing demand and tight deadlines: That's how I would
            describe Jeramy and his team at The Modiste's Stitch Company.
            Professional, responsive, and able to keep up with ever-changing
            demand and tight deadlines
          </p>
        </div>
      </div>
      <div className={styles.testimonialDiv}>
        <h4>Testimonials</h4>
        <Testimonial testimonialData={testimonialData} />
      </div>
    </div>
  );
};

export default About;
