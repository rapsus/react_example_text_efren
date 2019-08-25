import React from 'react';
import './AutoCompleteText.css';

export default class AutoCompleteText extends React.Component {
constructor (props) {
super(props);
/*
this.items = [
'David',
'Damien',
'Dorothy',
'Donna',
'Sara',
'Samantha',
'Sabrina',
'Jane',
'Jayden',
'Joseph',
];
this.letters = "d, j, s";
this.introText = "start with ";
*/
this.state = {
suggestions: [],
text: '',
};
}


onTextChanged = (e) => {
const { items } = this.props; // for importing countries
const value = e.target.value;
let suggestions = [];
if (value.length > 0) {
const regex = new RegExp(`^${value}`, 'i');
/* suggestions = this.items.sort().filter(v => regex.test(v));  // list of names */
suggestions = items.sort().filter(v => regex.test(v));  // list of countries
}
this.setState(() => ({ suggestions, text: value }));
}


suggestionSelected (value) {
this.setState(() => ({
text: value,
suggestions: [],
}))
}


renderSuggestions () {
const { suggestions } = this.state;
if (suggestions.length === 0) {
return null;
}
return (
<ul>
{suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
</ul>
);
}


renderItems () {
return (
<ul>
{this.items.map((item) => <li>{item}</li>)}
</ul>
);
}

render () {
const { text } = this.state;
return (
<div className="AutoCompleteText">
{this.props.text} {this.letters} : <input value={text} onChange={this.onTextChanged} type="text" />
{this.renderSuggestions()}
</div>
);
}
}
