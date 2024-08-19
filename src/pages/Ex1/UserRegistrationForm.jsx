import React from 'react';
import { useForm } from 'react-hook-form';

const UserRegistrationForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  
  const validateAge = (value) => {
    return value >= 18 || 'A idade mínima é 18 anos';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <input
          {...register('name', { required: 'Nome é obrigatório' })}
          placeholder="Digite seu nome"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register('email', { required: 'Email é obrigatório' })}
          placeholder="Digite seu email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Senha:</label>
        <input
          type="password"
          {...register('password', { required: 'Senha é obrigatória' })}
          placeholder="Digite sua senha"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>Idade:</label>
        <input
          type="number"
          {...register('age', {
            required: 'Idade é obrigatória',
            validate: validateAge
          })}
          placeholder="Digite sua idade"
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default UserRegistrationForm;
