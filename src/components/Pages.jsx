import React from "react";

export const Pages = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div className="container">
      <div className="row">
        {posts.map((post, index) => {
          return (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="card bg-secondary">
                <div className="card-header">
                  {post.FirstName} {post.LastName}
                </div>
                <div className="card-body">
                  <p className="card-text">{post.Gender}</p>
                  <p className="card-text">{post.Latitude}</p>
                  <p className="card-text">{post.Longitude}</p>
                  <p className="card-text">{post.CreditCardNumber}</p>
                  <p className="card-text">{post.CreditCardType}</p>
                  <p className="card-text">{post.Email}</p>
                  <p className="card-text">{post.DoaminName}</p>
                  <p className="card-text">{post.PhoneNumber}</p>
                  <p className="card-text">{post.MacAddress}</p>
                  <p className="card-text">{post.URL}</p>
                  <p className="card-text">{post.UserName}</p>
                  <p className="card-text">{post.LastLogin}</p>
                  <p className="card-text">{post.PaymentMethod}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pages;
