import Template from "../components/Template";
import signupImg from "../assets/signup.png";

function Signup({ setisloggedin }) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      setisloggedin={setisloggedin}
    />
  );
}

export default Signup;


