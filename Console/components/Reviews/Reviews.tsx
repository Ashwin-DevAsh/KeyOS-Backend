import Images from "../../assets/Images";

export default function () {
  var reviews: String[] = [
    `Nice App. Now I can block unwanted apps in my kids mobile and also I can set time limit apps. All features are well done`,
    `It was a great app! It ensures safety of kids during this lock down days. It is really helpful. worth download`,
    `I used this app it's really safe and secure now I can set time limit for all apps and block unwanted calls.`,
  ];
  return (
    <div className="reviews">
      <div className="review-heading">
        <h1>See what our Customers Says</h1>
      </div>
      <div className="reviews-container">
        {reviews.map((item, index, _) => {
          return getReviewComponent(item);
        })}
      </div>
    </div>
  );
}

function getReviewComponent(review: String) {
  return (
    <div className="review-tile">
      <div className="review-box">
        <h5>{review}</h5>
        <div className="starts">
          {[1, 2, 3, 4, 5].map((item, index, list) => {
            return <img style={{ height: 15 }} src={Images.star} alt="" />;
          })}
        </div>
        <h4>5.0</h4>
      </div>
      <div className="person-box"></div>
    </div>
  );
}
