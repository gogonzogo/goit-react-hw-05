import css from './SearchForm.module.css';
import { useState } from 'react';

const SearchForm = ({onSubmit}) => {
  const [userInput, setUserInput] = useState('');
  

  const handleChange = (e) => {
    const query = e.target.value;
    setUserInput(query);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userInput);
  }

  return (
    <div className={css.searchContainer}>
      <form onSubmit={handleSubmit} className={css.searchFormContainer}>
        <input
          className={css.searchFormInput}
          name="search"
          type="text"
          value={userInput}
          onChange={handleChange}
        ></input>
        <button className={css.searchFormButton} type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;