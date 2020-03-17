require('./connection');
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  haveLearnedAboutBP: Boolean,
  installedVSCode: Boolean,
  windowsUser: Boolean,
  configuredBash: Boolean,
  openTerminal: Boolean,
  nodeVersion: String,
  whichNode: String,
  configuredVSCode: Boolean,
  installedLiveShare: Boolean,
  updatedGitHubProfile: Boolean,
  setGitConfig: Boolean,
  installedZoomClient: Boolean,
  installedSlack: Boolean,
  setUpZoomRoom: String,
  canAccessLearn: Boolean,
  operatingSystem: String,
  wslInstalled: Boolean,
  operatingSystemVersion: String,
  createdBlog: Boolean,
});

module.exports = mongoose.model('Student', studentSchema);
