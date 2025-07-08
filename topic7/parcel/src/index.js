// import templateSource from './template.hbs'
import Handlebars from 'handlebars';

const templateSource = `
  <ul>
    {{#each posts}}
      <li>
        <h3>{{title}}</h3>
        <p>{{body}}</p>
      </li>
    {{/each}}
  </ul>
`
const template = Handlebars.compile(templateSource)

const data = {
	posts: [
		{ title: 'Перший пост', body: 'Це тіло першого поста.' },
		{ title: 'Другий пост', body: 'Це тіло другого поста.' },
		{ title: 'Третій пост', body: 'Це тіло третього поста.' },
	],
}

const html = template(data)
document.getElementById('root').innerHTML = html
