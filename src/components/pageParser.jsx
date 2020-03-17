import React from 'react';
import FirstAndLastName from './Student/FirstAndLastNames';
import BAndP from './Student/BAndP';
import InstallVSCode from './Student/InstallVSCode';

const pageParser = (currentPage, studentId, updateUserCallback) => {
  let pageToDisplay;

  switch (currentPage) {
    case 1:
      console.log('case1');
      pageToDisplay = (<BAndP updateUserCallback={updateUserCallback} />);
      break;
    case 2:
      console.log('case2');
      pageToDisplay = (<InstallVSCode updateUserCallback={updateUserCallback} />);
      break;
    case 3:
      console.log('case3');
      pageToDisplay = (<WindowsUsers />);
      break;
    case 4:
      console.log('case4');
      pageToDisplay = (<ConfigureBash />);
      break;
    case 5:
      console.log('case5');
      pageToDisplay = (<OpenTerminal />);
      break;
    case 6:
      console.log('case6');
      pageToDisplay = (<NodeVersion />);
      break;
    case 7:
      console.log('case7');
      pageToDisplay = (<WhichNode />);
      break;
    case 8:
      console.log('case8');
      pageToDisplay = (<ConfigureVSCode />);
      break;
    case 9:
      console.log('case9');
      pageToDisplay = (<InstallLiveShare />);
      break;
    case 10:
      console.log('case10');
      pageToDisplay = (<UpdateGitHubProfile />);
      break;
    case 11:
      console.log('case11');
      pageToDisplay = (<setGitConfig />);
      break;
    case 12:
      console.log('case12');
      pageToDisplay = (<InstallZoomClient />);
      break;
    case 13:
      console.log('case13');
      pageToDisplay = (<InstallSlack />);
      break;
    case 14:
      console.log('case14');
      pageToDisplay = (<SetUpZoomRoom />);
      break;
    case 15:
      console.log('case15');
      pageToDisplay = (<CanAccessLearn />);
      break;
    case 16:
      console.log('case16');
      pageToDisplay = (<OperatingSystem />);
      break;
    case 17:
      console.log('case17');
      pageToDisplay = (<WSLInstalled />);
      break;
    case 18:
      console.log('case18');
      pageToDisplay = (<OperatingSystemVersion />);
      break;
    case 19:
      console.log('case19');
      pageToDisplay = (<CreatedBlog />);
      break;
    default:
      pageToDisplay = <FirstAndLastName updateUserCallback={updateUserCallback} />;
      console.log('default');
  }

  return pageToDisplay;
};

export default pageParser;
