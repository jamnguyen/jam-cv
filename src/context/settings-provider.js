import React from 'react';

const SettingsContext = React.createContext();

const SettingsProvider = (props) => {
  const [headerTitle, setHeaderTitle] = React.useState('Jam CV');
  const [showHeadFooter, setShowHeadFooter] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [firstTimeLoading, setLoadingFirstTime] = React.useState(true);

  const setFirstTimeLoading = (value) => { console.log('first time', value); setLoadingFirstTime(value) }

  const settingsValue = {
    headerTitle,
    setHeaderTitle,
    showHeadFooter,
    setShowHeadFooter,
    isLoading,
    setIsLoading,
    firstTimeLoading,
    setFirstTimeLoading
  }

  return (
    <SettingsContext.Provider value={ settingsValue } { ...props } />
  );
}

const useSettings = () => React.useContext(SettingsContext);

export { SettingsProvider, useSettings };