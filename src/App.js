import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@hevotecnologia/ckeditor5-build-classic'

import data from './data.json'

console.log(data)

const App = () => {
  const handleInit = editor => {
    console.log('Editor is ready to use!', editor)
  }

  const handleChange = (event, editor) => {
    const data = editor.getData()
    console.log({ event, editor, data })
  }

  const handleBlur = (event, editor) => {
    const data = editor.getData()
    console.log('Blur.', data)
  }

  const handleFocus = (event, editor) => {
    const data = editor.getData()
    console.log('Focus.', data)
  }

  return (
    <>
      <h1>Contrato</h1>
      <div className='contract-editor'>
        <CKEditor
          editor={ClassicEditor}
          data={data.loanTerms}
          config={{
            // language: 'pt-br',
            toolbar: {
              items: [
                'heading',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                '|',
                'superscript',
                'subscript',
                '|',
                'bulletedList',
                'numberedList',
                'indent',
                'outdent',
                '|',
                'undo',
                'redo'
              ]
            }
            // ,
            // heading: {
            //   options: [
            //     {
            //       model: 'paragraph',
            //       title: 'Parágrafo',
            //       class: 'ck-heading_paragraph'
            //     },
            //     {
            //       model: 'heading1',
            //       view: 'h2',
            //       title: 'Título 2',
            //       class: 'ck-heading_heading1'
            //     },
            //     {
            //       model: 'heading2',
            //       view: 'h3',
            //       title: 'Título 3',
            //       class: 'ck-heading_heading2'
            //     }
            //   ]
            // }
          }}
          onInit={handleInit}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </div>
    </>
  )
}

export default App
