import React from 'react';

const SettingsContext = React.createContext();

const SettingsProvider = (props) => {
  const [headerTitle, setHeaderTitle] = React.useState('Jam CV');
  const [headerVisibility, setHeaderVisibility] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const settingsValue = {
    headerTitle,
    setHeaderTitle,
    headerVisibility,
    setHeaderVisibility,
    isLoading,
    setIsLoading
  }

  return (
    <SettingsContext.Provider value={ settingsValue } { ...props } />
  );
}

const useSettings = () => React.useContext(SettingsContext);

export { SettingsProvider, useSettings };