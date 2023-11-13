// React components

// Main user profile card component
function UserProfileCard() {
  return (
    <div id="card-container" className="card-dark">
      <UserInfo />
      <Footer />
    </div>
  );
}

// User information component
function UserInfo() {
  const [isFollowed, setFollowed] = React.useState(false);

  const handleFollowToggle = () => {
    setFollowed(!isFollowed);
  };

  return (
    <div className="info">
      <header>
        {/* Updated profile picture URL */}
        <div className="profile-picture" style={{ backgroundImage: "url('https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/365303489_1738524616578373_489454426360434357_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OWmJ0GUhQckAX-2yP6E&_nc_ht=scontent-man2-1.xx&oh=00_AfCKl_Y6yiBn4x-aWtPXFDf9XMytnpEDui_e3iNYiIBMqw&oe=6556E688')" }}></div>
        <h2>Abigail Whittle</h2>
        <h5>Age: 23</h5>
        <h6>Location: Bristol, UK</h6>
        <button className={`contact-button ${isFollowed ? 'followed' : 'follow'}`} onClick={handleFollowToggle}>
          <i className="fa-solid fa-user-plus"></i>
          {isFollowed ? 'Followed' : 'Follow'}
        </button>
      </header>
    </div>
  );
}

// Footer component (omitting social links)
function Footer() {
  return <footer id="contact-links"></footer>;
}

// Render the user profile card
ReactDOM.render(<UserProfileCard />, document.getElementById("root"));
