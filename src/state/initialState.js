import _site from "../config/config";

export const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  projects: _site.site_info.portfolio.projects,
  loading: true,
  openContact: false,
  openAbout: false
};

console.log(initialState);
