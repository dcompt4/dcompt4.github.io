import React from 'react';
import '../App.css';
import resume from '../test.pdf';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume (){

  const pdfUrl = '../test.pdf'; // Replace with the actual path to your resume PDF file
    return (
        <div className="App">    
          <div class="first-div">
            <h1>
              Resume
            </h1>
            <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
              <Document file={pdfUrl}>
                <Page pageNumber={1} />
              </Document>
            </div>

          </div>
        </div>
      );
}


  
export default Resume;