import React from "react";
import Tagline from "./components/Tagline";
import AboutMe from "./components/AboutMe";
import EditProfileCatalogue  from "./components/EditProfileCatalogue";
import ConnectionsMain from "./components/ConnectionsMain";
import Experience from "./components/Experience";
import InterestModal from "./components/InterestModal";
import Education from "./components/Education";
import FollowFollowersMain from "./components/FollowFollowersMain";
import Company from "./components/Company";

function App() {
  return (
    <div>
  
  <EditProfileCatalogue/>
  <Tagline title="Tagline"/>
  <AboutMe title="About Me"/>
  <InterestModal/>
  <Experience/>
 <Education title1="Institute name" title2="Degree" title3="Grade"/>
 <Company title1="Company name" title2="Role" title3="Description"/>
 <ConnectionsMain/>
<FollowFollowersMain/>


    </div>
  );
}

export default App;

