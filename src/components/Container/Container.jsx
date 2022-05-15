import React from "react";
import { useSelector } from "react-redux";

const Container = () => {
    const user = useSelector((state)=>state.user)
  const userData = useSelector((state) => state.userData);
  if(!user) return(<div className="card my-3 p-3" style={{maxWidth:"520px"}}>Search with Username</div>)
  return (
    <div>
      <div className="card my-3 p-3" style={{maxWidth:"520px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={userData.avatar_url} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{userData.name}</h5>
              <p className="card-text">
              {userData.bio}
              </p>
              <p className="card-text">
              {userData.location}
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated {userData.updated_at}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
