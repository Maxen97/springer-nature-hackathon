import InsightViewer, { useImage } from '@lunit/insight-viewer'

const MOCK_IMAGE = 'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000002.dcm'

export default function App() {
  const { image } = useImage({ wadouri: MOCK_IMAGE })

  return <InsightViewer image={image} />
}