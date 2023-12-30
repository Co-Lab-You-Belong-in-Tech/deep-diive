function InitializeReactGA(ReactGA) {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize("G-QGGY6NY4E9");
      window.GA_INITIALIZED = true;
    }
  }
  
export default InitializeReactGA;