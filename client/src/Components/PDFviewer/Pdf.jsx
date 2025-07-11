import { FiDownload } from "react-icons/fi";
export const PDFViewer=(props)=> {
//  const pdfUrl = {props.link}; // Replace with your PDF link

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <a
          href={props.link}
          download
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: '#223e66', fontWeight: 'bold' }}
        >
          <FiDownload size={20} style={{ marginRight: '5px' }} />
          Download PDF
        </a>
      </div>
      <iframe
        src={props.link}
        width="100%"
        height="600px"
        title="PDF Viewer"
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      />
    </div>
  );
}
