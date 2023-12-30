import React from "react";
import Partition from "../Partition/partition";
import "./about.css";
import gif from "./imgtop.gif";
import gif2 from "./deepDiver.gif";
import img1 from "./website_design.jpg";
import img2 from "./image2.webp";
import coder from "./deepDive.gif";
let console = '{console.log("Hello")}';

const About = () => {
  return (
    <section id="about">
      <Partition name="'MarsTech' Officially Unofficial" />

      <img src={gif} alt="coder_gif" className="midImage" />

      <div className="text">
        "Code like a Martian, think like a genius. Welcome to MarsTech, where we
        turn lines of code into extraordinary creations!"💻💡✨✈
      </div>

      <div className="text mt-2">
        At <b>MarsTech</b> we don't make you learn anything..❌ <br />
        We just help you building yourself! 🏭🧰
      </div>

      <div className="mt-2 text">
        Welcome to MarsTech, the cozy spot where we geek out over all things
        tech! Join us to learn, collaborate and dominate the digital frontier.
        Together, we explore the exciting world of technology and empower each
        other to reach new heights!
      </div>

      <img src={img1} alt="web_design_image" className="midImage" />

      <div className="mt-2 text">
        "MarsTech: Where innovation meets passion, and together, we create a
        universe of possibilities!"💡💡
        <br /> "MarsTech: Where we code, explore, and make our tech dreams
        soar!"💻✨
      </div>

      <div className="mt-2 text">
        Hey there, fellow tech enthusiasts! Ready to dive into the world of
        MarsTech? Let's ignite our imaginations and embark on an epic coding
        journey together! ✈💻✨
      </div>

      <img src={img2} alt="coder" className="midImage" />

      <div className="mt-2 text">
        Are you Martians well-versed in the diverse domains of technology?
        <br /> Let's explore the intricacies of coding and technical fields
        together! 💻✨
      </div>

      <div className="mt-2 text">
        There are various domains of technology, such as software development,
        data science, cybersecurity, artificial intelligence, and cloud
        computing. Each field offers exciting opportunities to explore and
        contribute to the ever-evolving world of technology! ✨💻🌪{" "}
      </div>

      <Partition name="Let's dive deeper into the different domains of technology" />

      <img src={gif2} alt="deepDiver" className="midImage" />

      <div className="mt-2 text">
        <div className="text-2">
          <b> Software Development :</b> This field focuses on designing, coding
          and testing software applications, ranging from mobiles apps to web
          development.
        </div>
        <div className="mt-2 text-2">
          <b>Data Science :</b> Data Scientists analyze and interpret large sets
          of data to uncover valuable insights and trends, using techniques like
          machine learning and statistical modeling.
        </div>
        <div className="mt-2 text-2">
          <b> Cybersecurity :</b> Cybersecurity professionals protect computer
          systems and networks from cyber threats, ensuring the confidentiality,
          integrity, and avialability of data.
        </div>
        <div className="mt-2 text-2">
          <b> Artificial Intelligence :</b> AI involves the development of
          intelligent machines that can perform tasks that typically require
          human intelligence, like natural language processing and computer
          vision.
        </div>
        <div className="mt-2 text-2">
          <b> Cloud Computing :</b> Cloud Computing enables the storage and
          access of data and applications over the internet, providing
          scalability, flexibility, and cost-effectiveness.
        </div>
      </div>

      <img src={coder} alt="coder_gif" className="midImage" />
      <Partition name='console.log("Hello")' />
      <h2>Let me show you something interesting..!</h2>
      <div className="mt-2 text">
        <div className="w-50 text-2">Bonjour</div>
        <div className="w-50 mt-1 text-2">こんにちは (Kon'nichiwa)</div>
        <div className="w-50 mt-1 text-2">Merhaba</div>
        <div className="w-50 mt-1 text-2">হ্যালো (Hyālō)</div>
        <div className="w-50 mt-1 text-2">Hola</div>
        <div className="w-50 mt-1 text-2">ഹലോ (halayaa)</div>
        <br />
        If you are unable to understand the meaning of some words you came
        through just above! Don't worry we too don't understand what they
        mean..😂😎! <br /> <br />
        But...! &nbsp; what about <b>"console.log("Hello")"</b> above those
        weird words. <br /> <br />
        It will print <b>Hello</b> in your browser's console.
      </div>
      <Partition
        name='Are you thinking : 
"WHAT IS CONSOLE?"'
      />
      <h3>"WHY ONLY 'HELLO' IS PRINTED AND NOT FULL {console}?"</h3>
      <div className="mt-2 text">
        It is not our fault, one who is to be blamed is <b>JavaScript</b>.
        <br />
        <br /> Not only JavaScript, but there are many such other languages like
        <b> C, C++, C#, Java, Python, Rust, Go, Ruby... and so many</b>.
        <br />
        <br />
        These languages are so biased..😒🤢 <br /> <br /> That's because they
        favour only those who love them😉 If you people are interested in
        learning the diverse fields of technology with us, fill the form below
        to Join Us at <b>MarsTech</b>.
      </div>
    </section>
  );
};

export default About;
