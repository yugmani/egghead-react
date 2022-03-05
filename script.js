const rootElement = document.getElementById('root');

// CREATING ELEMENT
// ****************************************

// const element = React.createElement('div', {
//   children: React.createElement('div', null, 'Hello', ' World'),
//   className: 'container',
// });

// OR

// CREATING ELEMENT USING JSX METHOD
// ****************************************

const children = 'Hello World.';
const className = 'container';
const myChildren = 'Hello World!';
const next_children = ' How are you?';
const class_name = 'container';
const props = { children, className };

// const element = (
//   <div className={class_name}>
//     <span> {myChildren}</span>
//     <strong> {next_children}</strong>
//   </div>
// );

// OR
// const element = <div className={class_name} children={myChildren} />;

//OR
const element = <div id="app-root" {...props} className="not-container" />;
// className ->container is overwritten by not-container

ReactDOM.render(element, rootElement);
