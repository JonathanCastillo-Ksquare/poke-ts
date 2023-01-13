import React from 'react';
import { Input } from '@mui/material';
import './App.css';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

type IForm = {
  username: string;
}

function App() {

  const { handleSubmit, control } = useForm<IForm>({ defaultValues: { username: '' } });
  const onSubmit: SubmitHandler<IForm> = data => {
    console.log(data)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='username'
          control={control}
          render={({ field }) => <Input placeholder='Username' {...field} />}
        />

        <input type='submit' />
      </form>
    </div>
  );
}

export default App;
