import "./css/work.css";

const Works = () => {
  return (
    <div id="works">
      <h2>Works</h2>
      <div className="work-container flex-row">
        <div className="my-work">
            <p className="fa fa-bug"></p>
          <h3>Programming Problems</h3>
          <div>
            I have a habbit of solving coding problems in my free time also
            upload to my{" "}
            <a href="https://github.com/allcodebreaker" target="_blank" rel="noopener noreferrer">
              <u> github repo </u>
            </a>{" "}
            Here are some of the problems I have solved.
            <a
              className="link"
              href="https://github.com/allcodebreaker/problem_solving"
              target="_blank" rel="noopener noreferrer"
            >
              Check it out
            </a>
          </div>
        </div>

        <div className="my-work">
            <p className="fa fa-code"></p>
          <h3>Data Structures and Algorithms</h3>
          <div>
            I do some code on implementing data structures and algorithms, I
            upload it on my <a href="https://github.com/allcodebreaker" target="_blank" rel="noopener noreferrer">
              <u> github repo </u>
            </a>
            , Which may help beginners to know how to implement them.
            <a
              className="link"
              href="https://github.com/AllCodeBreaker/data-structures-and-algorithms"
              target="_blank" rel="noopener noreferrer"
            >
              Check it out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
