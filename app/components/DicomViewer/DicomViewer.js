import React, { useEffect, useRef, useState } from 'react';

const DicomViewer = ({ dicomUrls }) => {
  const viewerRef = useRef(null);
  const dwvApp = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTool, setCurrentTool] = useState('ZoomAndPan');

  useEffect(() => {
    let dwv = null;

    const initializeDWV = async () => {
      try {
        // Import DWV module
        const dwvModule = await import('dwv');
        dwv = dwvModule.default || dwvModule;

        if (!dwv || !dwv.App) {
          throw new Error('Failed to load DWV module');
        }

        // Create app
        const app = new dwv.App();
        dwvApp.current = app;

        // Initialize with proper view configuration
        const viewConfig0 = new dwv.ViewConfig('layerGroup0');
        const viewConfigs = {'*': [viewConfig0]};
        const options = new dwv.AppOptions(viewConfigs);
        
        // Add tools to options
        options.tools = {
          WindowLevel: {},
          ZoomAndPan: {},
          Scroll: {},
          Draw: {
            options: ['Ruler', 'Circle', 'Rectangle']
          }
        };

        // Initialize the app
        await app.init(options);

        // Add event listeners
        app.addEventListener('load-start', () => setIsLoading(true));
        app.addEventListener('load-end', () => setIsLoading(false));
        app.addEventListener('error', (event) => setError(event.error?.message || 'Unknown error'));

        // Set initial tool
        app.setTool(currentTool);

        // Load DICOM file if URL is provided
        if (dicomUrls) {
          await app.loadURLs(dicomUrls);
        }

      } catch (error) {
        console.error('DWV initialization error:', error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    initializeDWV();

    return () => {
      if (dwvApp.current) {
        try {
          dwvApp.current.reset();
          dwvApp.current = null;
        } catch (error) {
          console.error('Cleanup error:', error);
        }
      }
    };
  }, [dicomUrls, currentTool]);

  const handleToolChange = (toolName) => {
    if (dwvApp.current) {
      dwvApp.current.setTool(toolName);
      setCurrentTool(toolName);
    }
  };

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg">
        Error loading DICOM viewer: {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      {/* Toolbar */}
      <div className="flex space-x-2 p-2 bg-gray-100 rounded-lg">
        <button
          onClick={() => handleToolChange('ZoomAndPan')}
          className={`px-4 py-2 rounded ${
            currentTool === 'ZoomAndPan' 
              ? 'bg-blue-500 text-white' 
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          Zoom/Pan
        </button>
        <button
          onClick={() => handleToolChange('WindowLevel')}
          className={`px-4 py-2 rounded ${
            currentTool === 'WindowLevel' 
              ? 'bg-blue-500 text-white' 
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          Brightness
        </button>
        <button
          onClick={() => handleToolChange('Scroll')}
          className={`px-4 py-2 rounded ${
            currentTool === 'Scroll' 
              ? 'bg-blue-500 text-white' 
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          Scroll
        </button>
        {/* <button
          onClick={() => handleToolChange('Draw')}
          className={`px-4 py-2 rounded ${
            currentTool === 'Draw' 
              ? 'bg-blue-500 text-white' 
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          Draw
        </button> */}
      </div>

      {/* Viewer Container */}
      {<div className="">
        <div id="layerGroup0" className="layer-container" style={{width: "500px, height: 500px"}}>
          {/* DWV will inject its elements here */}
        </div>
      </div>}
    </div>
  );
};

export default DicomViewer;