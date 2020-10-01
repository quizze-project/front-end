import React, { FormHTMLAttributes } from 'react';

const LoginForm: React.FC<FormHTMLAttributes<HTMLFormElement>> = ({ onSubmit }) => {
  return (
    <form method='post' onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="email">Qual email você nos forneceu quando se registrou?</label>
        <input id="email" name="email"
          type="email" className="custominput block" placeholder="juniordosgabaritos@email.com.br"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">E sua senha? Lembraste?</label>
        <input id="password" name="password"
          type="password" className="custominput block" placeholder="********"
          required
        />
      </div>
      <button type="submit" className="btn bg-green block">Hora do show!</button>
    </form>
  );
}

export default LoginForm;