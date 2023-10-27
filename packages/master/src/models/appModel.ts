import { useState } from 'react';

export default () => {
  const [apps] = useState([]);

  const fetchAllApps = async () => {
    console.log('fetch all App');
  };

  const addApp = async () => {
    console.log('add App');
  };

  const updateApp = async () => {
    console.log('update App');
  };

  const removeApp = async () => {
    console.log('remove App');
  };

  return {
    apps,
    fetchAllApps,
    addApp,
    updateApp,
    removeApp,
  };
};
