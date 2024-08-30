import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import ErrorDisplay from './ErrorDisplay/ErrorDisplay';
import NameDisplay from './NameDisplay/NameDisplay';
import { fetchGenderByName } from '../../api/api';
import './Form.css';

export default function Form() {
  const [person, setPerson] = useState({ name: '', gender: '' });

  // по хорошему тут бы не чисто строку ввести, а полноценную структуру ошибок
  const [userError, setUserError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userError) {
      return;
    }

    const genderFetch = await fetchGenderByName(person.name);
    if (!genderFetch.status) {
      setUserError('Failed Fetch!');
      return;
    }

    setPerson({ ...person, gender: genderFetch.gender });
  }

  useEffect(() => {
    console.log('Gender:' + person.gender);
  }, [person.gender]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newName = e.target.value;
    let error = '';

    if (newName.length === 0) {
      setUserError(error);
      setPerson({ name: '', gender: '' });
      return;
    }

    if (newName.length > 20) {
      error = 'No more than 20 characters!';
    } else if (!/^[A-Za-z\s]+$/.test(newName)) {
      error = 'Use only latin alphabet!';
    }

    setUserError(error);
    setPerson({ name: newName, gender: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="name-input">
        <Input
          type="text"
          value={person.name}
          name="name"
          placeholder="Enter name..."
          onChange={handleChange}
        ></Input>
        <Button
          type="submit"
          text="Genderize!"
          isClickable={!Boolean(userError)}
        ></Button>
      </div>
      <ErrorDisplay text={userError} />
      <div className="name-for-genderize">
        <NameDisplay name={person.name} gender={person.gender} />
      </div>
    </form>
  );
}
