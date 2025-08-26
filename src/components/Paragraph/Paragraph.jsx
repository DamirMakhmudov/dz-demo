import './Paragraph.css';

function Paragraph({ width, height, fontSize, text }) {
  return (

    <div className='paragraph' style={{ width, height, fontSize }}>{text}</div>
  );
}


export default Paragraph;
