const React = require ('react')
const Default = require('./layouts/default')

function Index ({ breads }) {
  const people = ['nick', 'eric', 'vincent']
  const display = breads.map((bread, i) => {
    return (
      <li key={i}>
        <a href={`/breads/${i}`}>{bread.name}</a>
      </li>
  )
})
  return (
    <Default>
      <h2>Index Page</h2>
      <p>hello</p>
      <ul>
        {display}
      </ul>
    </Default>
  )
}

module.exports = Index