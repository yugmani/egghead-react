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
const class_name = 'new_container';
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
// const element = <div id="app-root" {...props} className="not-container" />;
// className ->container is overwritten by not-container

// ReactDOM.render(element, rootElement);

// rendering more than one elements
// ****************************************

const firstElement = React.createElement('span', null, 'Yoog');
const secondElement = React.createElement('span', null, 'Gurung');

// const element = React.createElement(
//   React.Fragment, // to embed child elements
//   null,
//   firstElement,
//   ' ', // extra space between two elements
//   secondElement
// );

// OR with JSX
// const element = (
//   <React.Fragment>
//     <span>Yoog</span> <span>Gurung</span>
//   </React.Fragment>
// );

// OR
// const element = (
//   <>
//     <span>{firstElement}</span> <span>{secondElement}</span>
//   </>
// );

// OR
const element = (
  <>
    <span>Yoog</span> <span>Gurung</span>
  </>
);

// ReactDom.render(element, document.getElementById('root'))
ReactDOM.render(element, document.getElementById('root'));
