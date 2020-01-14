import React from "react";

class Filter extends React.Component {
  render() {
    const { name, displayName, options, defaultOption } = this.props;
    return (<label htmlFor={ name }>
      <span className="label-text">{ displayName }</span>
      <select name={name} id="">
        { defaultOption && <option value="">{defaultOption.label}</option> }
        { options.map( (option, i) => {
          return <option key={i} value={option.value}>{option.label}</option>
        } ) }
      </select>
    </label>)
  }
}

export default Filter;