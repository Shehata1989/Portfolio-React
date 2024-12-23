import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
      <div className="">
        <button onClick={() => navigate("/")}>Back Home</button>
      </div>
  );
};

export default About;
