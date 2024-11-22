'use client';

import DicomViewer from '../components/DicomViewer/DicomViewer';

export default function DicomPage() {
  return (
    <div>
      <h1>DICOM Viewer</h1>
      <DicomViewer
        dicomUrls={["https://raw.githubusercontent.com/ivmartel/dwv/master/tests/data/bbmri-53323851.dcm", 
          'https://raw.githubusercontent.com/ivmartel/dwv/master/tests/data/bbmri-53323707.dcm',
          'https://raw.githubusercontent.com/ivmartel/dwv/master/tests/data/bbmri-53323563.dcm']}
        /* dicomUrl="../public/data/dicoms/dicom1.dcm" */
      />
    </div>
  );
}