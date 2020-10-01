import React, { FormHTMLAttributes } from 'react';

const RegisterForm: React.FC<FormHTMLAttributes<HTMLFormElement>> = ({ onSubmit }) => {
  return (
    <form method='post' onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Primeiro, por qual nome você quer que os outros o conheça?</label>
        <input id="name" name="name"
          type="text" className="custominput block" placeholder="Juninho Gabaritator"
          maxLength={Number(process.env.REACT_APP_NAME_LIMIT)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Agora, você poderia nos fornecer o email que você mais usa?</label>
        <input id="email" name="email"
          type="email" className="custominput block" placeholder="juniordosgabaritos@email.com.br"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">
          Não menos importante, qual senha gostaria de usar para entrar em sua conta?
      </label>
        <input id="password" name="password"
          type="password" className="custominput block" placeholder="********"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmpassword">
          Por fim, queremos saber se você não sentou a mão no teclado. Por favor, informe sua senha novamente:
      </label>
        <input id="confirmpassword" name="confirmpassword"
          type="password" className="custominput block" placeholder="********"
          required
        />
      </div>
      <button type="submit" className="btn bg-green block">Cria minha conta aí, bicho!</button>
    </form>
  );
}

export default RegisterForm;