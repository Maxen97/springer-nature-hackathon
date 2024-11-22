import React, { useEffect, useRef, useState } from 'react';

const DicomViewer = ({ dicomUrl }) => {
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
        if (dicomUrl) {
          await app.loadURLs([dicomUrl]);
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
  }, [dicomUrl, currentTool]);

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
          Window/Level
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
        <button
          onClick={() => handleToolChange('Draw')}
          className={`px-4 py-2 rounded ${
            currentTool === 'Draw' 
              ? 'bg-blue-500 text-white' 
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          Draw
        </button>
      </div>

      {/* Viewer Container */}
      {<div className="w-full h-[600px] bg-black relative">
        <div id="layerGroup0" className="layer-container">
          {/* DWV will inject its elements here */}
        </div>
      </div>}

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-600">Loading DICOM image...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DicomViewer;