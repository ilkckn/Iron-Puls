import "./UserFeedback.css";

const UserFeedback = () => {
  return (
    <section className="user-feedback">
      <div className="container">
        <div className="content-feedback">
          <div className="header">
            <span>user feedback</span>
            <h1>built by the</h1>
            <h1>community</h1>
            <span></span>
          </div>
          <div className="feedback">
            <p>
              "The intensity here is unmatched. It's not a place where you just
              'work out.' It's a place where you evolve. The atmosphere of raw
              energy keeps me coming back every morning at 5 AM."
            </p>
            <div className="user">
              <p className="short-name">m.v.</p>
              <div className="name-prof">
                <span className="name">marcus vance</span>
                <span className="prof">powerlifter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFeedback;
