import React from 'react'

/**
 * What is React Fragment?
 * Think of it as a 'ghost' wrapper. In React, every component must return a single root element. 
 * Usually, people use a <div> to wrap multiple elements, but this adds extra, unnecessary tags 
 * to your HTML structure (DOM).
 * 
 * Why is it required?
 * 1. To keep the HTML clean: Avoids "div soup" where you have nested divs that serve no purpose.
 * 2. To prevent layout issues: Some CSS layouts (like Flexbox or Grid) or HTML structures 
 *    (like Tables) can break if you inject an unwanted <div> in the middle.
 * 3. Performance: Fewer DOM nodes means a slightly faster and lighter application.
 * 
 * Use Cases:
 * - Returning multiple <td> components (as seen in Column.js) where a <div> would be invalid HTML inside a <tr>.
 * - Grouping list items without a container.
 * - Any time you need to satisfy React's "one root element" rule without actually adding a container.
 */

function Fragment() {
  return (
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>This component uses React.Fragment to group multiple elements without adding an extra node to the DOM.</p>
    </React.Fragment>
  )
}

export default Fragment