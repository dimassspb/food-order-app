import React from 'react';
import MultiplePizzas from "../assets/masala.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}>
      </div>
      <div className="aboutBottom">
<h1>About us</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim modi laudantium necessitatibus accusantium! Voluptatibus, illum iste. Autem est quisquam ut sed sint nesciunt facere debitis, a, sequi, atque iure quibusdam. Dicta, autem reprehenderit? Quibusdam repellendus nulla, cupiditate illo ut ad repellat velit minima! Alias libero rem suscipit ipsam cumque atque deserunt id, eius nisi. Porro quasi maiores tenetur explicabo nulla provident nihil autem suscipit, quod dolores accusantium, molestias eum a dignissimos distinctio assumenda non repellat magnam quaerat omnis quibusdam laborum? Nesciunt nam laborum dignissimos asperiores distinctio quis natus dolor sed exercitationem ipsa totam possimus eos, quia provident perferendis error maxime!</p>
      </div>
    </div>
  );
}
 
export default About;