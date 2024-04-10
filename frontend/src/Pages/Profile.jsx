import React, { useState, useEffect } from 'react';
import ButtonCTA from '../Components/ButtonCTA';
import ServiceCard from '../Components/ServiceCard';
import newRequest from '../Utils/newRequest';
import user from '../assets/user.svg';

const Profile = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [packages, setPackages] = useState([]);

  const fetchPackages = async () => {
    try {
      const response = await newRequest.get(`/profile/${currentUser.username}`);
      setPackages(response.data.packages); // Assuming packages are nested under a 'packages' property
      console.log("Packages fetch is done!!!");
    } catch (error) {
      console.error('Error fetching packages:', error.message);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, [currentUser.username]);

  const deletePackage = async (packageId) => {
    try {
      const response = await newRequest.delete(`/profile/${currentUser.username}/${packageId}`);
      if (response.status === 200) {
        console.log('Package deleted successfully');
        fetchPackages(); // Fetch packages again to update the UI
      }
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  return (
    <div className="profile">
      <div className="profile__left-column">
        <img className='profile__image' src={user} alt="Profile" />
        <span className="profile__username">@{currentUser ? currentUser.username : ""}</span>
        <span className="profile__joined-on faded">Joined in February 2023</span>
        
        <div className="profile__extra-info">
          <p className="content">Description</p>
          <p className="profile__content">
            Hello, I'm a graphic designer specialized in logo design.
          </p>
        </div>
        <ButtonCTA class='pri-cta cta' name='Contact me' />
      </div>

      <div className="profile__right-column">
        <div className="profile__right-column--services">
          {packages.map((pack, index) => (
            <ServiceCard
              key={index}
              name={pack.name}
              description={pack.desc}
              price={pack.price}
              deletePackage={() => deletePackage(pack._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
