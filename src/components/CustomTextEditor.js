import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import './CustomEditor.scss';

export default class CustomTextEditor extends React.Component {
  constructor (props) {
    super(props);
    this.modules = {
      toolbar: [
        [{ 'font': [] }],
        [{size: ['small', false , 'large']}],
        ['bold', 'italic', 'underline', 'strike', {'color': [] } , {'align': [] }],
        ['clean']
      ],
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      }
    };
    this.formats = [
      'font', 'size', 'bold', 'italic', 'underline', 'strike', 'color', 'align'
    ];
    this.state = { editorHtml: this.props.placeholder, theme: 'bubble' };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (html) {
  	this.setState({ editorHtml: html });
  }
  
  render () {
    return (
      <div>
        <ReactQuill 
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={this.modules}
          formats={this.formats}
          placeholder=""
         />
       </div>
     )
  }
}